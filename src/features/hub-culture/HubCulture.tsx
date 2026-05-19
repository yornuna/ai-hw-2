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

const conditions = [
  "важно инженерное и продуктовое мышление",
  "решения влияют на реальные сервисы",
  "есть пространство для роста и ответственности",
];

export function HubCulture(): ReactElement {
  return (
    <Section>
      <section
        className={styles.section}
        aria-label="Мы работаем с задачами, где:"
      >
        <div className={styles.grid}>
          <div className={styles.purpleCard}>
            <Body
              size="l"
              tone="inverse"
              weight="medium"
              className={styles.purpleCardText}
            >
              Среда, где важны продукт и люди, которые его создают
            </Body>
            <Link href="/vacancies" className={styles.ctaLink}>
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

          <div className={styles.listColumn}>
            <Heading level="m" as="p" className={styles.listTitle}>
              Мы работаем с задачами, где:
            </Heading>
            <ul className={styles.list}>
              {conditions.map((text) => (
                <li key={text} className={styles.pill}>
                  <Body size="m" as="span">
                    {text}
                  </Body>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </Section>
  );
}
