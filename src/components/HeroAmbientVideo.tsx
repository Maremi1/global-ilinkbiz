import { useEffect, useRef, useState } from "react";
import heroVideoAsset from "@/assets/hero-ambient-v3.mp4.asset.json";
import heroPoster from "@/assets/hero-ambient-poster.jpg";

/**
 * Interactive ambient hero video.
 *  - Parallax tilt follows the cursor
 *  - Subtle zoom-out on scroll
 *  - Performance: skips video on small screens, reduced-motion, save-data, slow nets
 *  - Lazy-plays via IntersectionObserver; pauses when off-screen / tab hidden
 */
export default function HeroAmbientVideo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [enableVideo, setEnableVideo] = useState(false);

  // Capability check
  useEffect(() => {
    if (typeof window === "undefined") return;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // @ts-expect-error non-standard
    const conn = navigator.connection;
    const saveData = conn?.saveData === true;
    const slowNet = typeof conn?.effectiveType === "string" && /(^| )(2g|slow-2g)/.test(conn.effectiveType);
    if (prefersReducedMotion || saveData || slowNet) return;
    setEnableVideo(true);
  }, []);

  // Playback control
  useEffect(() => {
    if (!enableVideo) return;
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;
    const tryPlay = () => video.play().catch(() => {});
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) tryPlay();
          else video.pause();
        }
      },
      { threshold: 0.05 },
    );
    io.observe(container);
    const onVis = () => (document.hidden ? video.pause() : tryPlay());
    document.addEventListener("visibilitychange", onVis);
    return () => {
      io.disconnect();
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [enableVideo]);

  // Interactive parallax + scroll zoom
  useEffect(() => {
    const container = containerRef.current;
    const media = mediaRef.current;
    if (!container || !media) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let targetX = 0, targetY = 0, curX = 0, curY = 0, scrollScale = 1, raf = 0;

    const onMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width - 0.5;
      const ny = (e.clientY - rect.top) / rect.height - 0.5;
      targetX = nx * 24; // px translate
      targetY = ny * 16;
    };
    const onLeave = () => { targetX = 0; targetY = 0; };
    const onScroll = () => {
      const rect = container.getBoundingClientRect();
      const progress = Math.min(1, Math.max(0, -rect.top / Math.max(1, rect.height)));
      scrollScale = 1.08 - progress * 0.06; // 1.08 → 1.02
    };

    const tick = () => {
      curX += (targetX - curX) * 0.08;
      curY += (targetY - curY) * 0.08;
      media.style.transform = `scale(${scrollScale.toFixed(3)}) translate3d(${curX.toFixed(2)}px, ${curY.toFixed(2)}px, 0)`;
      raf = requestAnimationFrame(tick);
    };
    onScroll();
    raf = requestAnimationFrame(tick);

    window.addEventListener("pointermove", onMove, { passive: true });
    container.addEventListener("pointerleave", onLeave);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      container.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none absolute -top-28 left-0 right-0 bottom-0 -z-10 overflow-hidden"
    >
      <div
        ref={mediaRef}
        className="absolute inset-0 will-change-transform"
        style={{ transform: "scale(1.08)" }}
      >
        {enableVideo ? (
          <video
            ref={videoRef}
            src={heroVideoAsset.url}
            poster={heroPoster}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            disablePictureInPicture
            className="h-full w-full object-cover opacity-70 dark:opacity-55"
          />
        ) : (
          <img
            src={heroPoster}
            alt=""
            className="h-full w-full object-cover opacity-70 dark:opacity-55"
          />
        )}
      </div>
      {/* Light-theme wash — fades INTO the page background top & bottom for seamless blending */}
      <div
        className="absolute inset-0 dark:hidden"
        style={{
          background:
            "radial-gradient(ellipse at 30% 55%, oklch(0.75 0.14 215 / 0.16), transparent 60%), linear-gradient(to bottom, oklch(0.985 0.008 230) 0%, oklch(0.985 0.008 230 / 0.55) 14%, oklch(0.985 0.008 230 / 0.18) 40%, oklch(0.985 0.008 230 / 0.30) 70%, oklch(0.985 0.008 230 / 0.95) 100%)",
        }}
      />
      {/* Dark-theme wash — fades into dark page background top & bottom */}
      <div
        className="absolute inset-0 hidden dark:block"
        style={{
          background:
            "radial-gradient(ellipse at 30% 55%, oklch(0.55 0.16 215 / 0.28), transparent 60%), linear-gradient(to bottom, oklch(0.18 0.03 252) 0%, oklch(0.18 0.03 252 / 0.65) 14%, oklch(0.18 0.03 252 / 0.28) 40%, oklch(0.18 0.03 252 / 0.40) 70%, oklch(0.18 0.03 252 / 0.96) 100%)",
        }}
      />

    </div>
  );
}
