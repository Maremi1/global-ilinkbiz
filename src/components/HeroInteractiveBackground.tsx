import { useEffect, useRef, useCallback } from "react";

/* ───────────────────────────────────────────────────────────────────
   Interactive 3D Shattering Globe Background
   ─────────────────────────────────────────────────────────────────
   • Fibonacci sphere distribution for a perfect 3D globe
   • Particles connected by a wireframe mesh
   • Mouse interaction violently scatters particles (shatter effect)
   • Spring physics smoothly pull particles back into the globe formation
   • Perspective 3D projection onto 2D canvas with depth-sorting
   • Breathtaking "structuring/rebuilding" ecosystem visual
   ──────────────────────────────────────────────────────────────── */

interface Particle {
  id: number;
  x: number; y: number; z: number;
  vx: number; vy: number; vz: number;
  tx: number; ty: number; tz: number; // Target coords on the globe
  colorKind: 0 | 1 | 2;
}

interface Edge {
  a: number;
  b: number;
}

function resolveColor(prop: string, fallback: string) {
  try {
    const v = getComputedStyle(document.documentElement).getPropertyValue(prop).trim();
    return v || fallback;
  } catch {
    return fallback;
  }
}

// Convert OKLCH to RGBA roughly for canvas, or just let canvas parse it if supported.
// Modern browsers support oklch() in canvas context!

export default function HeroInteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  
  const mouse = useRef({ x: -9999, y: -9999 });
  const particlesRef = useRef<Particle[]>([]);
  const edgesRef = useRef<Edge[]>([]);
  const rafRef = useRef(0);
  const dprRef = useRef(1);
  const isDarkRef = useRef(false);

  const initSphere = useCallback((w: number, h: number) => {
    const isMobile = w < 640;
    const numParticles = isMobile ? 400 : 900;
    const R = isMobile ? Math.min(w, h) * 0.35 : Math.min(w, h) * 0.3;

    const particles: Particle[] = [];
    const edges: Edge[] = [];

    // 1. Generate Fibonacci Sphere
    for (let i = 0; i < numParticles; i++) {
      const phi = Math.acos(1 - 2 * (i + 0.5) / numParticles);
      const theta = Math.PI * (1 + Math.sqrt(5)) * (i + 0.5);

      const tx = R * Math.sin(phi) * Math.cos(theta);
      const ty = R * Math.cos(phi);
      const tz = R * Math.sin(phi) * Math.sin(theta);

      particles.push({
        id: i,
        // Start randomly scattered around the screen for an initial "assembly" animation
        x: (Math.random() - 0.5) * w * 2,
        y: (Math.random() - 0.5) * h * 2,
        z: (Math.random() - 0.5) * 1000 + 500,
        tx, ty, tz,
        vx: 0, vy: 0, vz: 0,
        colorKind: i % 12 === 0 ? 2 : (i % 2 === 0 ? 0 : 1)
      });
    }

    // 2. Build Wireframe Mesh (connect closest neighbors)
    // To keep it performant, we only connect a subset of points or limit to 2 nearest.
    for (let i = 0; i < particles.length; i++) {
      const p1 = particles[i];
      const dists = [];
      for (let j = 0; j < particles.length; j++) {
        if (i === j) continue;
        const p2 = particles[j];
        const dx = p1.tx - p2.tx;
        const dy = p1.ty - p2.ty;
        const dz = p1.tz - p2.tz;
        dists.push({ id: p2.id, d: dx * dx + dy * dy + dz * dz });
      }
      dists.sort((a, b) => a.d - b.d);
      
      // Add edges to the 2 closest neighbors
      edges.push({ a: p1.id, b: dists[0].id });
      edges.push({ a: p1.id, b: dists[1].id });
    }

    particlesRef.current = particles;
    edgesRef.current = edges;
  }, []);

  /* ─── Parallax Tilt ─────────────────────────────────────────── */
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
      targetX = nx * 30;
      targetY = ny * 20;
    };
    const onLeave = () => { targetX = 0; targetY = 0; };
    const onScroll = () => {
      const rect = container.getBoundingClientRect();
      const progress = Math.min(1, Math.max(0, -rect.top / Math.max(1, rect.height)));
      scrollScale = 1.08 - progress * 0.08;
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

  /* ─── 3D Canvas Loop ───────────────────────────────────────── */
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    dprRef.current = dpr;

    const resize = () => {
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (particlesRef.current.length === 0) initSphere(rect.width, rect.height);
    };
    resize();
    window.addEventListener("resize", resize);

    const onPointer = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current.x = e.clientX - rect.left;
      mouse.current.y = e.clientY - rect.top;
    };
    const onPointerLeave = () => {
      mouse.current.x = -9999;
      mouse.current.y = -9999;
    };
    window.addEventListener("pointermove", onPointer, { passive: true });
    container.addEventListener("pointerleave", onPointerLeave);

    const checkTheme = () => {
      isDarkRef.current = document.documentElement.classList.contains("dark");
    };
    checkTheme();
    const themeObs = new MutationObserver(checkTheme);
    themeObs.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    let time = 0;
    const fov = 1200; // Camera field of view/depth

    const draw = () => {
      const w = canvas.width / dpr;
      const h = canvas.height / dpr;
      const cx = w / 2;
      const cy = h / 2;
      const particles = particlesRef.current;
      const edges = edgesRef.current;
      const dark = isDarkRef.current;

      ctx.clearRect(0, 0, w, h);
      time += 0.003;

      const cosT = Math.cos(time);
      const sinT = Math.sin(time);
      
      // Tilt globe slightly to look down at it
      const tilt = 0.35;
      const cosTilt = Math.cos(tilt);
      const sinTilt = Math.sin(tilt);

      const mx = mouse.current.x - cx;
      const my = mouse.current.y - cy;
      const isMouseActive = mouse.current.x > -1000;

      // 1. Update Physics
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (!prefersReduced) {
          // Rotate target sphere around Y
          const rx = p.tx * cosT - p.tz * sinT;
          const rz = p.tx * sinT + p.tz * cosT;
          const ry = p.ty;

          // Tilt around X
          const ty2 = ry * cosTilt - rz * sinTilt;
          const tz2 = ry * sinTilt + rz * cosTilt;

          // Organic breathing of the sphere
          const breathe = 1 + Math.sin(time * 6 + p.ty * 0.01) * 0.03;
          const targetX = rx * breathe;
          const targetY = ty2 * breathe;
          const targetZ = tz2 * breathe;

          // Spring force towards target
          p.vx += (targetX - p.x) * 0.015;
          p.vy += (targetY - p.y) * 0.015;
          p.vz += (targetZ - p.z) * 0.015;

          // Mouse explosion / shatter effect
          if (isMouseActive) {
            const scale = fov / (fov + p.z);
            const projX = p.x * scale;
            const projY = p.y * scale;

            const dx = projX - mx;
            const dy = projY - my;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 180) {
              const force = (1 - dist / 180) * 2.5;
              p.vx += (dx / dist) * force * 0.15;
              p.vy += (dy / dist) * force * 0.15;
              p.vz += (Math.random() - 0.5) * force * 0.40;
            }
          }

          // Damping
          p.vx *= 0.91;
          p.vy *= 0.91;
          p.vz *= 0.91;

          p.x += p.vx;
          p.y += p.vy;
          p.z += p.vz;
        }
      }

      // Pre-calculate 2D projections for drawing
      const projected = new Map<number, { px: number; py: number; scale: number; alpha: number }>();
      for (const p of particles) {
        if (p.z < -fov + 10) continue; // Behind camera
        const scale = fov / (fov + p.z);
        const alpha = Math.min(1, Math.max(0.05, (p.z + 800) / 1600));
        projected.set(p.id, {
          px: cx + p.x * scale,
          py: cy + p.y * scale,
          scale,
          alpha
        });
      }

      /* ── Resolve colors ─ */
      const accentCyan = resolveColor("--accent-cyan", dark ? "oklch(0.80 0.14 215)" : "oklch(0.48 0.15 215)");
      const accentBlue = resolveColor("--accent-blue", dark ? "oklch(0.72 0.17 250)" : "oklch(0.50 0.19 250)");
      const highlight = dark ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.95)";
      const kindColors = [accentCyan, accentBlue, highlight] as const;

      // 2. Draw Wireframe Edges
      ctx.lineWidth = dark ? 0.6 : 0.8;
      ctx.beginPath();
      for (const edge of edges) {
        const p1 = projected.get(edge.a);
        const p2 = projected.get(edge.b);
        if (p1 && p2) {
          ctx.moveTo(p1.px, p1.py);
          ctx.lineTo(p2.px, p2.py);
        }
      }
      ctx.strokeStyle = dark ? `oklch(0.70 0.14 225 / 0.15)` : `oklch(0.55 0.12 230 / 0.12)`;
      ctx.stroke();

      // 3. Draw Particles (Depth sorted back-to-front)
      const sorted = [...particles].sort((a, b) => b.z - a.z);

      for (const p of sorted) {
        const proj = projected.get(p.id);
        if (!proj) continue;

        const baseRadius = p.colorKind === 2 ? 2.5 : 1.5;
        const radius = baseRadius * proj.scale;

        // Draw glow
        if (p.colorKind !== 2) {
          ctx.beginPath();
          ctx.arc(proj.px, proj.py, radius * 3.5, 0, Math.PI * 2);
          ctx.fillStyle = p.colorKind === 0
            ? (dark ? `oklch(0.75 0.14 215 / ${proj.alpha * 0.3})` : `oklch(0.55 0.15 215 / ${proj.alpha * 0.2})`)
            : (dark ? `oklch(0.68 0.17 250 / ${proj.alpha * 0.25})` : `oklch(0.50 0.17 250 / ${proj.alpha * 0.15})`);
          ctx.fill();
        }

        // Draw core
        ctx.beginPath();
        ctx.arc(proj.px, proj.py, radius, 0, Math.PI * 2);
        ctx.globalAlpha = proj.alpha;
        ctx.fillStyle = kindColors[p.colorKind];
        ctx.fill();
        ctx.globalAlpha = 1;
      }

      // 4. Mouse Core Glow
      if (isMouseActive) {
        const gradient = ctx.createRadialGradient(
          mouse.current.x, mouse.current.y, 0, 
          mouse.current.x, mouse.current.y, 250
        );
        if (dark) {
          gradient.addColorStop(0, "oklch(0.80 0.14 215 / 0.15)");
          gradient.addColorStop(0.5, "oklch(0.70 0.14 225 / 0.05)");
          gradient.addColorStop(1, "transparent");
        } else {
          gradient.addColorStop(0, "oklch(0.65 0.12 220 / 0.08)");
          gradient.addColorStop(0.5, "oklch(0.60 0.10 230 / 0.03)");
          gradient.addColorStop(1, "transparent");
        }
        ctx.fillStyle = gradient;
        ctx.fillRect(mouse.current.x - 250, mouse.current.y - 250, 500, 500);
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointer);
      container.removeEventListener("pointerleave", onPointerLeave);
      themeObs.disconnect();
    };
  }, [initSphere]);

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
        <canvas
          ref={canvasRef}
          className="h-full w-full"
          style={{ display: "block" }}
        />
      </div>

      {/* Light-theme wash */}
      <div
        className="absolute inset-0 dark:hidden"
        style={{
          background:
            "radial-gradient(ellipse at 30% 55%, oklch(0.75 0.14 215 / 0.16), transparent 60%), linear-gradient(to bottom, oklch(0.985 0.008 230) 0%, oklch(0.985 0.008 230 / 0.55) 14%, oklch(0.985 0.008 230 / 0.18) 40%, oklch(0.985 0.008 230 / 0.30) 70%, oklch(0.985 0.008 230 / 0.95) 100%)",
        }}
      />
      {/* Dark-theme wash */}
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
