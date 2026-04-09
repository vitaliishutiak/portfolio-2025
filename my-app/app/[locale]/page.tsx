"use client";

import { useState, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import HeroBlock from "../../components/HeroBlock";
import ProjectsBlock from "../../components/ProjectsBlock";
import SkillsBlock from "../../components/SkillsBlock";
import FaqBlock from "../../components/FaqBlock";
import HowItsWorksBlock from "../../components/HowItsWorksBlock";
import ExperienceBlock from "../../components/ExperienceBlock";
import Preloader from "../../components/Preloader";
import { HEADER_TOOLBAR_HEIGHT_PX } from "../../lib/contentWidth";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const handlePreloaderComplete = () => {
    setIsLoading(false);
  };

  // Оновлюємо ScrollTrigger після завантаження сторінки (динамічний import —
  // уникнення зламаного server chunk vendor-chunks/gsap.js у Next webpack)
  useEffect(() => {
    if (isLoading) return;

    let cancelled = false;
    let clearInner: (() => void) | undefined;

    void import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
      if (cancelled) return;

      const refresh = () => ScrollTrigger.refresh();
      const timer1 = setTimeout(refresh, 100);

      const handleLoad = () => refresh();

      if (document.readyState === "complete") {
        handleLoad();
      } else {
        window.addEventListener("load", handleLoad);
      }

      clearInner = () => {
        clearTimeout(timer1);
        window.removeEventListener("load", handleLoad);
      };

      if (cancelled) clearInner();
    });

    return () => {
      cancelled = true;
      clearInner?.();
    };
  }, [isLoading]);

  if (isLoading) {
    return <Preloader onComplete={handlePreloaderComplete} />;
  }

  return (
    <div style={{ width: "100%", maxWidth: "100vw", margin: 0, padding: 0 }}>
      <Header />
      <main
        style={{
          margin: 0,
          padding: 0,
          paddingTop: HEADER_TOOLBAR_HEIGHT_PX,
        }}
      >
        <HeroBlock />
        <ProjectsBlock />
        <HowItsWorksBlock />
        <SkillsBlock />
        <ExperienceBlock />
        <FaqBlock />
      </main>
      <Footer />
    </div>
  );
}
