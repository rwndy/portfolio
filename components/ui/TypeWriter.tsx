import { useState, useEffect, useRef } from "react";

interface Props { text: string; speed?: number; delay?: number; className?: string; onDone?: () => void; }

export function TypeWriter({ text, speed = 50, delay = 0, className, onDone }: Props) {
  const [len, setLen] = useState(0);
  const [started, setStarted] = useState(delay === 0);
  const [blink, setBlink] = useState(true);
  const doneFired = useRef(false);

  useEffect(() => { if (delay > 0) { const t = setTimeout(() => setStarted(true), delay); return () => clearTimeout(t); } }, [delay]);
  useEffect(() => {
    if (!started || len >= text.length) {
      if (started && len >= text.length && onDone && !doneFired.current) { doneFired.current = true; onDone(); }
      return;
    }
    const t = setTimeout(() => setLen((l) => l + 1), speed);
    return () => clearTimeout(t);
  }, [started, len, text, speed, onDone]);
  useEffect(() => { const i = setInterval(() => setBlink((b) => !b), 530); return () => clearInterval(i); }, []);

  return (
    <span className={className}>
      {text.slice(0, len)}
      <span style={{ opacity: blink ? 1 : 0, color: "var(--primary)", transition: "opacity 0.08s" }} aria-hidden="true">█</span>
    </span>
  );
}
