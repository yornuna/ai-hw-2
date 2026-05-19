/**
 * TODO для студентов:
 * 1. Подключить i18n через next-intl
 * 2. Добавить навигацию к страницам продуктов
 */
"use client";

import { useMemo, type ReactElement, type ReactNode } from "react";
import { Flex } from "bcc-design";
import { Section } from "@/shared/components/Section";
import { Eyebrow, Heading } from "@/shared/components/Typography";
import styles from "./styles.module.scss";
import type { IProductCard } from "./types";
import { HubProductsDesktop } from "./ui/desktop/HubProductsDesktop";
import { HubProductsMobile } from "./ui/mobile/HubProductsMobile";

export function HubProducts(): ReactElement {
  const cards = useMemo<IProductCard[]>(
    () => [
      {
        title: "Единый продуктовый конвейер",
        description:
          "Оркестратор, который управляет процессами и связывает системы в единый поток",
        items: [
          "Управление логикой через BPMN",
          "Интеграция любых сервисов",
          "Изменения без переписывания кода",
        ],
        ctaLabel: "Посмотреть продукт",
        ctaHref: "/epk",
        imageSrc: "/images/redesign/products/epk.webp",
        imageAlt: "Единый продуктовый конвейер",
        imageBgColor: "#7c3aed",
      },
      {
        title: "Retail Banking Platform",
        description:
          "Готовый мобильный банк, который можно запустить быстрее, чем разработать с нуля",
        items: [
          "White-label решение",
          "Готовые пользовательские сценарии",
          "Кастомизация под бренд",
        ],
        ctaLabel: "Посмотреть продукт",
        ctaHref: "/rbp",
        imageBgColor: "#b8a5d6",
        imageSrc: "/images/redesign/products/rbp.webp",
        imagePlaceholderText: "Здесь будет картинка",
      },
    ],
    [],
  );

  const header: ReactNode = (
    <Flex direction="column" gap={12}>
      <Eyebrow>Продукты</Eyebrow>
      <Heading level="l" className={styles.sectionTitle}>
        Платформы, на которых строится финтех
      </Heading>
    </Flex>
  );

  return (
    <Section className={styles.section} aria-label="Продукты">
      <div className={styles.stage}>
        <div className={styles.desktopOnly}>
          <HubProductsDesktop header={header} cards={cards} />
        </div>
        <div className={styles.mobileOnly}>
          <HubProductsMobile
            header={header}
            cards={cards}
            ariaLabel="Продукты"
          />
        </div>
      </div>
    </Section>
  );
}
