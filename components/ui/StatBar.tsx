import { useInView } from "@/lib/hooks";

interface Props { label: string; level: number; color: string; delay?: number; }

export function StatBar({ label, level, color, delay = 0 }: Props) {
  const [ref, visible] = useInView(0.2);
  return (
    <div ref={ref}>
      <div className="stat-bar-header font-pixel text-[9px]">
        <span>{label}</span>
        <span style={{ color: "var(--secondary)" }}>{level}%</span>
      </div>
      <div className="stat-bar-track">
        <div className="stat-bar-fill" role="progressbar" aria-valuenow={level} aria-valuemin={0} aria-valuemax={100} aria-label={`${label}: ${level}%`}
          style={{ width: visible ? `${Math.min(level, 100)}%` : "0%", backgroundColor: color, transition: `width 1.2s cubic-bezier(.25,.46,.45,.94) ${delay}s`, boxShadow: visible ? `0 0 8px ${color}50` : "none" }} />
      </div>
    </div>
  );
}
