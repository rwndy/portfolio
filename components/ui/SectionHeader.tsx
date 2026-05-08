import { ScrollReveal } from "./ScrollReveal";

interface Props { title: string; subtitle?: string; }

export function SectionHeader({ title, subtitle }: Props) {
  return (
    <ScrollReveal>
      <div className="section-hdr">
        <h2 className="section-hdr-title font-pixel text-[clamp(13px,2.5vw,22px)]">{title}</h2>
        {subtitle && <p className="section-hdr-sub font-body text-2xl">{subtitle}</p>}
        <div className="section-hdr-divider" aria-hidden="true">
          <span>◆</span><span className="divider-line" /><span>◆</span>
        </div>
      </div>
    </ScrollReveal>
  );
}
