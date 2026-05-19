/**
 * TODO для студентов:
 * 1. Подключить i18n через next-intl (заменить хардкод на useTranslations)
 * 2. Добавить обработчик прокрутки к форме (handleScrollToContactForm)
 * 3. Подключить роутинг для кнопки "Смотреть вакансии"
 */
"use client";

import type { ReactElement } from "react";
import Link from "next/link";
import { Button, EButtonVariant, Flex } from "bcc-design";
import { Section } from "@/shared/components/Section";
import { Body, Heading } from "@/shared/components/Typography";
import styles from "./styles.module.scss";

function ChevronRight(): ReactElement {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        d="M7.5 5L12.5 10L7.5 15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function HubHero(): ReactElement {
  const handleScrollToContactForm = (): void => {
    // TODO: добавить логику
  };

  return (
    <Section bleed aria-label="Создаем финтех-продукты">
      <div className={styles.card}>
        <div className={styles.content}>
          <div className={styles.textGroup}>
            <Heading level="xl" tone="inverse" className={styles.title}>
              Создаем финтех-продукты
            </Heading>
            <Body size="l" tone="inverse" className={styles.subtitle}>
              Платформы и решения bcc hub помогают запускать новые продукты,
              управлять сложными процессами и создавать цифровой опыт
            </Body>
          </div>
          <Flex className={styles.buttons}>
            <div className={styles.buttonLink}>
              <Button
                view={EButtonVariant.AccentSecondary}
                size="xl"
                iconRight={<ChevronRight />}
                className={styles.heroButton}
                onClick={handleScrollToContactForm}
              >
                Обсудить решение
              </Button>
            </div>
            <Link href="/vacancies" className={styles.buttonLink}>
              <Button
                view={EButtonVariant.AccentTertiary}
                size="xl"
                iconRight={<ChevronRight />}
                className={styles.heroButton}
              >
                Смотреть вакансии
              </Button>
            </Link>
          </Flex>
        </div>
      </div>
    </Section>
  );
}
