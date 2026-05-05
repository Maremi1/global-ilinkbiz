import { useEffect, useRef, useState } from "react";
import heroVideoAsset from "@/assets/hero-ambient.mp4.asset.json";
import heroPoster from "@/assets/hero-ambient-poster.jpg";

/**
 * Subtle looping ambient video for the hero background.
 * Performance safeguards:
 *  - Skips video on small screens, reduced-motion users, save-data, and slow connections
 *  - Lazy-loads via IntersectionObserver; pauses when off-screen or tab hidden
 *  - Falls back to a static poster image
 */
export default function HeroAmbientVideo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [enableVideo, setEnableVideo] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const isSmall = window.matchMedia("(max-width: 768px)").matches;

    // @ts-expect-error -- non-standard
    const conn = navigator.connection;
    const saveData = conn?.saveData === true;
    const slowNet =
      typeof conn?.effectiveType === "string" &&
      /(^| )(2g|slow-2g)/.test(conn.effectiveType);

    if (prefersReducedMotion || isSmall || saveData || slowNet) return;

    setEnableVideo(true);
  }, []);

  useEffect(() => {
    if (!enableVideo) return;
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    const tryPlay = () => {
      video.play().catch(() => {
        /* ignore autoplay rejection */
      });
    };

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

    const onVis = () => {
      if (document.hidden) video.pause();
      else tryPlay();
    };
    document.addEventListener("visibilitychange", onVis);

    return () => {
      io.disconnect();
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [enableVideo]);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
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
          className="h-full w-full object-cover opacity-60"
        />
      ) : (
        <img
          src={heroPoster}
          alt=""
          width={1920}
          height={1088}
          className="h-full w-full object-cover opacity-60"
        />
      )}
      {/* Soft wash to keep hero text legible */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background/70" />
    </div>
  );
}
