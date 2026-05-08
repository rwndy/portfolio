import { ScrollReveal, SectionHeader } from "@/components/ui";
import { EXPERIENCE } from "@/lib/constants";

export function ExperienceSection() {
  return (
    <section id="quests" className="py-[100px]" aria-label="Work experience">
      <div className="max-w-[1100px] mx-auto px-7">
        <SectionHeader title="QUEST LOG" subtitle="Work Experience" />
        <div className="quest-timeline">
          {EXPERIENCE.map((exp, i) => (
            <ScrollReveal key={exp.company} delay={i * 0.08}>
              <article className="quest-card">
                <span className={`quest-badge font-pixel text-[8px] ${exp.status === "active" ? "badge-active" : "badge-done"}`}>
                  {exp.status === "active" ? "● IN PROGRESS" : "✓ COMPLETED"}
                </span>
                <div className="quest-top">
                  <h3 className="quest-company font-pixel text-xs">{exp.company}</h3>
                  <span className="quest-loc font-body text-lg">{exp.loc}</span>
                </div>
                {exp.sub && <div className="quest-sub font-body text-lg">{exp.sub}</div>}
                <div className="quest-meta">
                  <span className="quest-role font-body text-[22px]">{exp.role}</span>
                  <span className="quest-period font-body text-xl">{exp.period}</span>
                </div>
                <ul className="quest-hl">
                  {exp.highlights.map((h, j) => <li key={j} className="font-body text-xl">{h}</li>)}
                </ul>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
