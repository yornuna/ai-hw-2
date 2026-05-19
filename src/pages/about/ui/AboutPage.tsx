import type { ReactElement } from "react";
import { AboutRedesignHero } from "@/features/about-redesign-hero";
import { AboutRedesignWhoWeAre } from "@/features/about-redesign-who-we-are";
import { AboutRedesignHowWeWork } from "@/features/about-redesign-how-we-work";
import { AboutRedesignCulture } from "@/features/about-redesign-culture";
import { AboutRedesignFaq } from "@/features/about-redesign-faq";
import { AboutRedesignStats } from "@/features/about-redesign-stats";

export function AboutPage(): ReactElement {
  return (
    <main>
      <AboutRedesignHero />
      <AboutRedesignWhoWeAre />
      <AboutRedesignHowWeWork />
      <AboutRedesignCulture />
      <AboutRedesignFaq />
      <AboutRedesignStats />
    </main>
  );
}
