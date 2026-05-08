import { useEffect, useRef } from "react";

interface Particle {
  x: number; y: number; size: number; vx: number; vy: number;
  color: string; alpha: number; phase: number; speed: number;
}

interface Props { colors?: string[]; count?: number; }

export function PixelParticles({ colors = ["#FF6B35"], count = 40 }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const frameId = useRef(0);
  const mouse = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const init = () => {
      particles.current = Array.from({ length: count }, () => ({
        x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight,
        size: (Math.floor(Math.random() * 3) + 1) * 2,
        vx: (Math.random() - 0.5) * 0.4, vy: -(Math.random() * 0.3 + 0.1),
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.35 + 0.12, phase: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.02 + 0.008,
      }));
    };

    resize(); init();
    window.addEventListener("resize", resize);
    const onMouse = (e: MouseEvent) => { mouse.current = { x: e.clientX, y: e.clientY }; };
    window.addEventListener("mousemove", onMouse, { passive: true });

    const draw = () => {
      const W = window.innerWidth, H = window.innerHeight;
      ctx.clearRect(0, 0, W, H);
      const { x: mx, y: my } = mouse.current;
      for (const p of particles.current) {
        p.x += p.vx; p.y += p.vy; p.phase += p.speed;
        const dx = p.x - mx, dy = p.y - my, d = Math.sqrt(dx * dx + dy * dy);
        if (d < 120 && d > 0) { const f = ((120 - d) / 120) * 1.5; p.x += (dx / d) * f; p.y += (dy / d) * f; }
        if (p.y < -20) { p.y = H + 10; p.x = Math.random() * W; }
        if (p.x < -20) p.x = W + 20;
        if (p.x > W + 20) p.x = -20;
        ctx.globalAlpha = p.alpha * (0.6 + 0.4 * Math.sin(p.phase));
        ctx.fillStyle = p.color;
        ctx.fillRect(Math.round(p.x / 2) * 2, Math.round(p.y / 2) * 2, p.size, p.size);
      }
      ctx.globalAlpha = 1;
      frameId.current = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(frameId.current); window.removeEventListener("resize", resize); window.removeEventListener("mousemove", onMouse); };
  }, [colors, count]);

  return <canvas ref={canvasRef} aria-hidden="true" className="fixed top-0 left-0 w-screen h-screen pointer-events-none z-1" />;
}
