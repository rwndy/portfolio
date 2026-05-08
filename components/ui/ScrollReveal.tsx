import type { CSSProperties, ReactNode } from "react";
import { useInView } from "@/lib/hooks";

type Direction = "up" | "down" | "left" | "right" | "scale";

const OFFSETS: Record<Direction, string> = {
  up: "translateY(30px)", down: "translateY(-30px)",
  left: "translateX(30px)", right: "translateX(-30px)", scale: "scale(0.92)",
};

interface Props { children: ReactNode; delay?: number; direction?: Direction; style?: CSSProperties; }

export function ScrollReveal({ children, delay = 0, direction = "up", style }: Props) {
  const [ref, visible] = useInView(0.08);
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "none" : OFFSETS[direction],
      transition: `opacity 0.7s cubic-bezier(.4,0,.2,1) ${delay}s, transform 0.7s cubic-bezier(.4,0,.2,1) ${delay}s`,
      ...style,
    }}>
      {children}
    </div>
  );
}
