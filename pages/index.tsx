import Head from "next/head";
import dynamic from "next/dynamic";
import { useScrollSpy, useTweaks, useMounted } from "@/lib/hooks";
import { THEMES, DEFAULT_TWEAKS } from "@/lib/constants";
import { SEO_DEFAULTS, SITE_URL, generatePersonJsonLd, generateWebsiteJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  XpBar,
  GameNav,
  HeroSection,
  AboutSection,
  SkillsSection,
  ExperienceSection,
  ProjectsSection,
  FooterSection,
  TweaksPanel,
} from "@/components/sections";
import { AudioToggle } from "@/components/ui";

const PixelParticles = dynamic(
  () => import("@/components/ui/PixelParticles").then((m) => m.PixelParticles),
  { ssr: false }
);

export default function HomePage() {
  const mounted = useMounted();
  const { scrollY, progress, activeIdx } = useScrollSpy();
  const { tweaks } = useTweaks(DEFAULT_TWEAKS);

  const theme = THEMES[tweaks.theme] ?? THEMES.Ember;
  const navVisible = mounted && scrollY > globalThis.innerHeight * 0.55;

  return (
    <>
      <Head>
        <title>{SEO_DEFAULTS.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={SEO_DEFAULTS.description} />
        <link rel="canonical" href={SITE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:title" content={SEO_DEFAULTS.title} />
        <meta property="og:description" content={SEO_DEFAULTS.description} />
        <meta property="og:image" content={SEO_DEFAULTS.ogImage} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Riwandi Portfolio" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={SEO_DEFAULTS.twitterHandle} />
        <meta name="twitter:creator" content={SEO_DEFAULTS.twitterHandle} />
        <meta name="twitter:title" content={SEO_DEFAULTS.title} />
        <meta name="twitter:description" content={SEO_DEFAULTS.description} />
        <meta name="twitter:image" content={SEO_DEFAULTS.ogImage} />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Riwandi" />
        <meta name="keywords" content="frontend engineer, react developer, next.js, typescript, tailwind css, jakarta, indonesia, senior frontend" />
      </Head>

      <JsonLd data={generatePersonJsonLd()} />
      <JsonLd data={generateWebsiteJsonLd()} />

      <PixelParticles colors={theme.particles} count={tweaks.particleCount} />
      <XpBar progress={progress} />
      <GameNav visible={navVisible} activeIdx={activeIdx} />
      {tweaks.crtEffect && <div className="scanlines" aria-hidden="true" />}
      <AudioToggle />
      <main className="relative z-2">
        
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <FooterSection />
      </main>
    </>
  );
}
