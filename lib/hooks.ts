import { useState, useEffect, useRef, useCallback } from "react";
import type { RefObject } from "react";
import { NAV_ITEMS, THEMES } from "./constants";
import type { Tweaks } from "./types";

export function useScrollSpy() {
  const [scrollY, setScrollY] = useState(0);
  const [progress, setProgress] = useState(0);
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const sy = window.scrollY;
      setScrollY(sy);
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? sy / total : 0);
      let idx = 0;
      NAV_ITEMS.forEach((n, i) => {
        const el = document.getElementById(n.id);
        if (el && el.getBoundingClientRect().top < window.innerHeight * 0.4) idx = i;
      });
      setActiveIdx(idx);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return { scrollY, progress, activeIdx };
}

export function useInView(threshold = 0.08): [RefObject<HTMLDivElement | null>, boolean] {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return [ref, visible];
}

export function useTweaks(defaults: Tweaks) {
  const [tweaks, setTweaks] = useState<Tweaks>(defaults);

  const setTweak = useCallback(
    <K extends keyof Tweaks>(key: K, value: Tweaks[K]) => {
      setTweaks((prev) => ({ ...prev, [key]: value }));
    },
    []
  );

  useEffect(() => {
    const theme = THEMES[tweaks.theme] ?? THEMES.Ember;
    const root = document.documentElement.style;
    root.setProperty("--primary", theme.primary);
    root.setProperty("--secondary", theme.secondary);
    root.setProperty("--accent", theme.accent);
    root.setProperty("--mint", theme.mint);
  }, [tweaks.theme]);

  return { tweaks, setTweak };
}

export function useMounted() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted;
}
