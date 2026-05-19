/**
 * TODO для студентов:
 * 1. Подключить i18n через next-intl
 */
"use client";

import { useMemo, type ReactElement, type ReactNode } from "react";
import { Flex } from "bcc-design";
import { Section } from "@/shared/components/Section";
import { Eyebrow, Heading } from "@/shared/components/Typography";
import styles from "./styles.module.scss";
import type { IFeatureCard } from "./types";
import { HubHowWeWorkDesktop } from "./ui/desktop/HubHowWeWorkDesktop";
import { HubHowWeWorkMobile } from "./ui/mobile/HubHowWeWorkMobile";

const CARD_DEFINITIONS = [
  {
    variant: "dark" as const,
    icon: "/images/how-we-work/icon-chain.svg",
    bgImage: "/images/how-we-work/card-bg-1.webp",
    title: "Процессы работают как единая цепочка",
  },
  {
    variant: "medium" as const,
    icon: "/images/how-we-work/icon-speed.svg",
    bgImage: "/images/how-we-work/card-bg-2.webp",
    title: "Новые продукты запускаются быстрее",
  },
  {
    variant: "light" as const,
    icon: "/images/how-we-work/icon-code.svg",
    bgImage: "/images/how-we-work/card-bg-3.webp",
    title: "Изменения без долгой разработки",
  },
];

export function HubHowWeWork(): ReactElement {
  const cards = useMemo<IFeatureCard[]>(() => CARD_DEFINITIONS, []);

  const header: ReactNode = (
    <Flex direction="column" gap={12}>
      <Eyebrow>Как мы работаем</Eyebrow>
      <Heading level="l" as="h2" className={styles.sectionTitle}>
        Связываем технологии в единый процесс
      </Heading>
    </Flex>
  );

  return (
    <Section className={styles.section} aria-label="Как мы работаем">
      <div className={styles.stage}>
        <div className={styles.desktopOnly}>
          <HubHowWeWorkDesktop header={header} cards={cards} />
        </div>
        <div className={styles.mobileOnly}>
          <HubHowWeWorkMobile
            header={header}
            cards={cards}
            ariaLabel="Как мы работаем"
          />
        </div>
      </div>
    </Section>
  );
}
