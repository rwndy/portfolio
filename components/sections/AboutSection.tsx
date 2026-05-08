import { ScrollReveal, SectionHeader } from "@/components/ui";

const PROFILE_STATS = [
  ["NAME", "Riwandi"], ["CLASS", "Frontend Engineer"], ["LEVEL", "6  (Senior)"],
  ["GUILD", "Bank Saqu"], ["REGION", "Jakarta, ID"], ["QUESTS", "5 Companies"],
] as const;

const INTEREST_TAGS = ["Crafting Web", "Playing Games", "Writing Stories", "Clean Code"];

export function AboutSection() {
  return (
    <section id="about" className="py-[100px]" aria-label="About me">
      <div className="max-w-[1100px] mx-auto px-7">
        <SectionHeader title="ABOUT ME" subtitle="Character Profile" />
        <div className="about-grid">
          <ScrollReveal>
            <div className="card">
              <h3 className="card-head font-pixel text-xs">◈ CHARACTER STATS</h3>
              {PROFILE_STATS.map(([key, value]) => (
                <div className="profile-row" key={key}>
                  <span className="profile-k font-body text-xl">{key}</span>
                  <span className="profile-v font-body text-xl">{value}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div className="about-bio font-body text-2xl">
              <p>A <em>frontend engineer</em> who crafts beautiful, performant web experiences by day — and dives into game worlds by night.</p>
              <p>With <em>6+ years</em> of experience building scalable applications across fintech, media & digital platforms. Passionate about <em>clean architecture</em>, developer experience, and pushing the boundaries of what the web can do.</p>
              <p>When not coding, you&apos;ll find me playing <em>FPS games</em>, exploring <em>RPG worlds</em>, speed-running CTR, swinging through the city in Spider-Man, or writing stories.</p>
              <div className="tag-row">
                {INTEREST_TAGS.map((t) => <span key={t} className="tag font-pixel text-[8px]">{t}</span>)}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
