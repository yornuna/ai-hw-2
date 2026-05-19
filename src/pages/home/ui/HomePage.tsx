import type { ReactElement } from "react";
import { HubHero } from "@/features/hub-hero";
import { HubStats } from "@/features/hub-stats";
import { HubValueProposition } from "@/features/hub-value-proposition";
import { HubHowWeWork } from "@/features/hub-how-we-work";
import { HubProducts } from "@/features/hub-products";
import { HubCaseStudy } from "@/features/hub-case-study";
import { HubCulture } from "@/features/hub-culture";
import { HubContactForm } from "@/features/hub-contact-form";

export function HomePage(): ReactElement {
  return (
    <main>
      <HubHero />
      <HubStats />
      <HubValueProposition />
      <HubHowWeWork />
      <HubProducts />
      <HubCaseStudy />
      <HubCulture />
      <HubContactForm />
    </main>
  );
}
