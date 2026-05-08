interface Props { progress: number; }

export function XpBar({ progress }: Props) {
  return (
    <div className="xp-bar" role="progressbar" aria-label="Scroll progress">
      <div className="xp-fill" style={{ width: `${progress * 100}%` }} />
      <span className="xp-text font-pixel text-[7px]">LVL 6 — {Math.round(progress * 100)}% EXPLORED</span>
    </div>
  );
}
