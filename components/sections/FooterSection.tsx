import { ScrollReveal, SectionHeader } from "@/components/ui";
import { SOCIALS } from "@/lib/constants";

export function FooterSection() {
  return (
    <footer id="connect" className="footer-sect py-[100px]" aria-label="Contact and social links">
      <div className="max-w-[1100px] mx-auto px-7">
        <SectionHeader title="CONNECT" subtitle="Let's Build Something Together" />
        <ScrollReveal>
          <p className="footer-cta font-body text-2xl">Ready to team up? Find me across the interwebs.</p>
          <div className="social-row">
            {SOCIALS.map((s) => (
              <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" className="social-card" aria-label={`Visit ${s.name} profile`}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d={s.svgPath} /></svg>
                <span className="font-pixel text-[8px]">{s.name}</span>
              </a>
            ))}
          </div>
          <div className="footer-end font-pixel">
            <p className="text-[10px]">THANKS FOR PLAYING</p>
            <p className="footer-copy text-[8px]">© {new Date().getFullYear()} RIWANDI — BUILT WITH ♥ AND CAFFEINE</p>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}
