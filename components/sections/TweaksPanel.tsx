import { useState } from "react";
import type { ThemeKey, Tweaks } from "@/lib/types";

const THEME_OPTIONS: ThemeKey[] = ["Ember", "Sunset", "Arcade"];

interface Props { tweaks: Tweaks; onTweak: <K extends keyof Tweaks>(key: K, value: Tweaks[K]) => void; }

export function TweaksPanel({ tweaks, onTweak }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-300 font-pixel text-[8px]">
      {open && (
        <div className="mb-2 p-4 border-2" style={{ background: "var(--bg-card)", borderColor: "var(--border)", minWidth: 220 }}>
          <div className="mb-3" style={{ color: "var(--secondary)" }}>Theme</div>
          <div className="flex gap-2 mb-4">
            {THEME_OPTIONS.map((t) => (
              <button key={t} onClick={() => onTweak("theme", t)} className="px-2 py-1 border cursor-pointer"
                style={{ borderColor: tweaks.theme === t ? "var(--primary)" : "var(--border)", color: tweaks.theme === t ? "var(--primary)" : "var(--text-m)", background: "transparent" }}>
                {t}
              </button>
            ))}
          </div>
          <div className="mb-3" style={{ color: "var(--secondary)" }}>Effects</div>
          <label className="flex items-center gap-2 mb-3 cursor-pointer" style={{ color: "var(--text-m)" }}>
            <input type="checkbox" checked={tweaks.crtEffect} onChange={(e) => onTweak("crtEffect", e.target.checked)} />
            CRT Scanlines
          </label>
          <div style={{ color: "var(--text-m)" }}>
            <div className="flex justify-between mb-1"><span>Particles</span><span>{tweaks.particleCount}</span></div>
            <input type="range" min={0} max={100} step={10} value={tweaks.particleCount} onChange={(e) => onTweak("particleCount", Number(e.target.value))} className="w-full" />
          </div>
        </div>
      )}
      <button onClick={() => setOpen((o) => !o)} className="px-3 py-2 border-2 cursor-pointer"
        style={{ background: "var(--bg-card)", borderColor: "var(--border)", color: "var(--text-m)" }}
        aria-label="Toggle settings panel">
        {open ? "✕ CLOSE" : "⚙ TWEAKS"}
      </button>
    </div>
  );
}
