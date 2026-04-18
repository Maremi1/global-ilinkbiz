import { useEffect, useRef } from "react";

type Ball = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  color: string;
  glow: string;
};

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0;
    let height = 0;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const radius = Math.max(60, Math.min(width, height) * 0.09);

    const balls: Ball[] = [
      {
        x: width * 0.25,
        y: height * 0.35,
        vx: 2.4,
        vy: 1.8,
        r: radius,
        color: "rgba(255,255,255,0.95)",
        glow: "rgba(255,255,255,0.55)",
      },
      {
        x: width * 0.7,
        y: height * 0.6,
        vx: -2.2,
        vy: 2.1,
        r: radius * 1.05,
        color: "rgba(59,130,246,0.95)", // blue-500
        glow: "rgba(37,99,235,0.65)",
      },
    ];

    let raf = 0;

    const step = () => {
      ctx.clearRect(0, 0, width, height);

      // Move + wall collisions
      for (const b of balls) {
        b.x += b.vx;
        b.y += b.vy;

        if (b.x - b.r <= 0) {
          b.x = b.r;
          b.vx = Math.abs(b.vx);
        } else if (b.x + b.r >= width) {
          b.x = width - b.r;
          b.vx = -Math.abs(b.vx);
        }
        if (b.y - b.r <= 0) {
          b.y = b.r;
          b.vy = Math.abs(b.vy);
        } else if (b.y + b.r >= height) {
          b.y = height - b.r;
          b.vy = -Math.abs(b.vy);
        }
      }

      // Ball-to-ball collision (elastic, equal mass)
      const [a, b] = balls;
      const dx = b.x - a.x;
      const dy = b.y - a.y;
      const dist = Math.hypot(dx, dy);
      const minDist = a.r + b.r;
      if (dist > 0 && dist < minDist) {
        // Resolve overlap
        const overlap = (minDist - dist) / 2;
        const nx = dx / dist;
        const ny = dy / dist;
        a.x -= nx * overlap;
        a.y -= ny * overlap;
        b.x += nx * overlap;
        b.y += ny * overlap;

        // Swap velocity components along the normal (equal mass elastic)
        const aDot = a.vx * nx + a.vy * ny;
        const bDot = b.vx * nx + b.vy * ny;
        const diff = bDot - aDot;
        a.vx += diff * nx;
        a.vy += diff * ny;
        b.vx -= diff * nx;
        b.vy -= diff * ny;
      }

      // Draw
      for (const ball of balls) {
        // Soft glow
        const grad = ctx.createRadialGradient(
          ball.x,
          ball.y,
          ball.r * 0.2,
          ball.x,
          ball.y,
          ball.r * 2.4,
        );
        grad.addColorStop(0, ball.glow);
        grad.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(ball.x, ball.y, ball.r * 2.4, 0, Math.PI * 2);
        ctx.fill();

        // Solid ball
        ctx.fillStyle = ball.color;
        ctx.beginPath();
        ctx.arc(ball.x, ball.y, ball.r, 0, Math.PI * 2);
        ctx.fill();

        // Highlight
        ctx.fillStyle = "rgba(255,255,255,0.35)";
        ctx.beginPath();
        ctx.arc(
          ball.x - ball.r * 0.35,
          ball.y - ball.r * 0.35,
          ball.r * 0.28,
          0,
          Math.PI * 2,
        );
        ctx.fill();
      }

      raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
    </div>
  );
}
