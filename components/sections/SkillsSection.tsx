import { ScrollReveal, SectionHeader, StatBar } from "@/components/ui";
import { SKILLS, EXTRA_SKILLS } from "@/lib/constants";

export function SkillsSection() {
  return (
    <section id="skills" className="py-25 bg-main" aria-label="Technical skills">
      <div className="max-w-275 mx-auto px-7">
        <SectionHeader title="SKILL TREE" subtitle="Technical Proficiencies" />
        <div className="skills-grid">
          {SKILLS.map((s, i) => <StatBar key={s.label} label={s.label} level={s.level} color={s.color} delay={i * 0.08} />)}
        </div>
        <ScrollReveal delay={0.3}>
          <div className="extra-skills">
            <h4 className="extra-skills-head font-pixel text-[10px]">+ ADDITIONAL SKILLS</h4>
            <div className="tag-row">
              {EXTRA_SKILLS.map((s) => <span key={s} className="tag font-pixel text-[8px]">{s}</span>)}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
