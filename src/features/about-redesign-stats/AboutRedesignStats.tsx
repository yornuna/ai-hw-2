/**
 * TODO для студентов:
 * 1. Подключить i18n через next-intl
 * 2. Добавить навигацию к странице вакансий
 */
"use client";

import type { ReactElement } from "react";
import Link from "next/link";
import { Button, EButtonVariant } from "bcc-design";
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

const stats = [
  { key: "stat1", number: "850+", label: "специалистов в команде" },
  { key: "stat2", number: "10+", label: "лет опыта в финтехе" },
  { key: "stat3", number: "80+", label: "реализованных проектов" },
];

export default function AboutRedesignStats(): ReactElement {
  return (
    <Section bleed>
      <div className={styles.container}>
        <div className={styles.statsBlock}>
          <div className={styles.statsInner}>
            <Heading level="l" tone="inverse" className={styles.statsTitle}>
              Факты, которые показывают масштаб
            </Heading>
            <div className={styles.statsCards}>
              {stats.map(({ key, number, label }) => (
                <div key={key} className={styles.statCard}>
                  <Heading level="xl" tone="inverse" as="p">
                    {number}
                  </Heading>
                  <Body size="l" tone="inverse">
                    {label}
                  </Body>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.ctaBlock}>
          <div className={styles.ctaInner}>
            <Heading level="l" tone="inverse" className={styles.ctaTitle}>
              Хотите работать с задачами, которые имеют значение?
            </Heading>
            <Link href="/vacancies" className={styles.ctaButtonLink}>
              <Button
                view={EButtonVariant.AccentSecondary}
                size="xl"
                iconRight={<ChevronRight />}
                className={styles.ctaButton}
              >
                Смотреть вакансии
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}
