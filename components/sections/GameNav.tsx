import { NAV_ITEMS } from "@/lib/constants";
import { scrollToSection } from "@/lib/utils";

interface Props { visible: boolean; activeIdx: number; }

export function GameNav({ visible, activeIdx }: Props) {
  return (
    <nav className={`game-nav${visible ? " show" : ""}`} aria-label="Section navigation">
      <div className="game-nav-box">
        {NAV_ITEMS.map((item, i) => (
          <button key={item.id}
            className={`gn-item font-pixel text-[8px]${i === activeIdx ? " active" : ""}`}
            onClick={() => scrollToSection(item.id)}
            aria-current={i === activeIdx ? "true" : undefined}>
            <span className="gn-cur" aria-hidden="true">{i === activeIdx ? "▸" : "\u00A0"}</span>
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
