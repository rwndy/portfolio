import { ScrollReveal, SectionHeader } from "@/components/ui";
import { PROJECTS } from "@/lib/constants";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-[100px] bg-main" aria-label="Featured projects">
      <div className="max-w-[1100px] mx-auto px-7">
        <SectionHeader title="LOOT" subtitle="Featured Projects" />
        <div className="projects-grid">
          {PROJECTS.map((p, i) => (
            <ScrollReveal key={p.title} delay={i * 0.12}>
              <a href={p.link} target="_blank" rel="noopener noreferrer" className="achieve-card">
                <div className="achieve-badge font-pixel text-[7px]">★ ACHIEVEMENT UNLOCKED</div>
                <h3 className="achieve-title font-pixel text-[13px]">{p.title}</h3>
                <p className="achieve-desc font-body text-xl">{p.desc}</p>
                <div className="tag-row">
                  {p.tech.map((t) => <span key={t} className="tag font-pixel text-[8px]">{t}</span>)}
                </div>
                <div className="achieve-arrow" aria-hidden="true">→</div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
