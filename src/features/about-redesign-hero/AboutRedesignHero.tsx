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

export default function AboutRedesignHero(): ReactElement {
  return (
    <Section bleed aria-label="Строим финтех, где важен результат и люди">
      <div className={styles.card}>
        <div className={styles.content}>
          <div className={styles.textGroup}>
            <Heading level="xl" tone="inverse" className={styles.title}>
              Строим финтех, где важен результат и люди
            </Heading>
            <Body size="l" tone="inverse" className={styles.subtitle}>
              <span className={styles.bold}>bcc-hub</span>
              {
                " — это команда, где инженерное мышление, продукт и визионерство соединяются, чтобы создавать системы которые помогают расти быстрее рынка"
              }
            </Body>
          </div>
          <div>
            <Link href="/vacancies">
              <Button
                view={EButtonVariant.AccentSecondary}
                size="xl"
                iconRight={<ChevronRight />}
                className={styles.heroButton}
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
