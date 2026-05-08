import { useState, useEffect } from "react";
import { TypeWriter } from "@/components/ui";
import { scrollToSection } from "@/lib/utils";

export function HeroSection() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 600);
    const t2 = setTimeout(() => setPhase(2), 2800);
    const t3 = setTimeout(() => setPhase(3), 5000);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  return (
    <section id="hero" className="hero" aria-label="Introduction">
      <div className="relative z-2">
        <div className="font-pixel text-[10px] text-mint border-2 border-mint inline-block px-[18px] py-1.5 mb-9"
          style={{ opacity: phase >= 1 ? 1 : 0, transition: "opacity 0.4s", animation: "pulse 2.5s infinite" }}>
          PLAYER ONE
        </div>
        {phase >= 1 && <TypeWriter text="RIWANDI" speed={110} className="font-pixel text-[clamp(26px,6vw,62px)] text-primary block mb-3.5" />}
        {phase >= 2 && <TypeWriter text="FRONTEND ENGINEER" speed={55} className="font-pixel text-[clamp(10px,2vw,18px)] text-secondary tracking-[4px] block mb-11" />}
        {phase >= 3 && (
          <div className="mt-2.5" style={{ animation: "fadeUp 0.6s ease both" }}>
            <button className="px-btn primary font-pixel text-[12px]" onClick={() => scrollToSection("about")}>▸ START EXPLORING</button>
            <div className="mt-11">
              <span className="blinker font-pixel text-[10px] text-t-dim" aria-hidden="true">▼ SCROLL DOWN ▼</span>
            </div>
          </div>
        )}
      </div>
      <div className="hero-grid-bg" aria-hidden="true" />
    </section>
  );
}
