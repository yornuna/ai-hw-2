/**
 * TODO для студентов:
 * 1. Подключить i18n через next-intl
 */
"use client";

import type { ReactElement } from "react";
import { Flex } from "bcc-design";
import { Section } from "@/shared/components/Section";
import { Body, Eyebrow, Heading } from "@/shared/components/Typography";
import styles from "./styles.module.scss";

export function HubValueProposition(): ReactElement {
  return (
    <Section>
      <div className={styles.section}>
        <Flex direction="column" className={styles.content}>
          <Flex direction="column" gap={12}>
            <Eyebrow className={styles.sectionTag}>От идеи до запуска</Eyebrow>
            <Heading balance={false} level="l" className={styles.sectionTitle}>
              bcc hub помогает сократить time-to-market и упростить архитектуру,
              объединяет существующие системы в управляемые процессы и готовые
              цифровые решения
            </Heading>
          </Flex>

          <Flex className={styles.cardsContainer}>
            <div className={styles.card}>
              <Flex direction="column" gap={12}>
                <div className={styles.icon}>
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <rect
                      width="48"
                      height="48"
                      rx="12"
                      fill="var(--b-color-object-bg-brand-strong-500, #8934f9)"
                      fillOpacity="0.1"
                    />
                    <path
                      d="M16 24h16M24 16v16"
                      stroke="var(--b-color-object-bg-brand-strong-500, #8934f9)"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <Heading level="m" as="h3" className={styles.cardTitle}>
                  Как это достигается
                </Heading>
                <ul className={styles.cardList}>
                  <li>
                    <Body size="l" tone="muted" as="span">
                      оркестрация вместо жёстких интеграций
                    </Body>
                  </li>
                  <li>
                    <Body size="l" tone="muted" as="span">
                      готовые платформенные решения
                    </Body>
                  </li>
                  <li>
                    <Body size="l" tone="muted" as="span">
                      модульный подход к архитектуре
                    </Body>
                  </li>
                </ul>
              </Flex>
            </div>

            <div className={styles.card}>
              <Flex direction="column" gap={12}>
                <div className={styles.icon}>
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <rect
                      width="48"
                      height="48"
                      rx="12"
                      fill="var(--b-color-object-bg-brand-strong-500, #8934f9)"
                      fillOpacity="0.1"
                    />
                    <path
                      d="M24 14L28 22H36L30 27L32 35L24 30L16 35L18 27L12 22H20L24 14Z"
                      stroke="var(--b-color-object-bg-brand-strong-500, #8934f9)"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <Heading level="m" as="h3" className={styles.cardTitle}>
                  Что это даёт
                </Heading>
                <ul className={styles.cardList}>
                  <li>
                    <Body size="l" tone="muted" as="span">
                      быстрый запуск новых продуктов
                    </Body>
                  </li>
                  <li>
                    <Body size="l" tone="muted" as="span">
                      меньше зависимости от legacy
                    </Body>
                  </li>
                  <li>
                    <Body size="l" tone="muted" as="span">
                      возможность масштабировать решения
                    </Body>
                  </li>
                </ul>
              </Flex>
            </div>
          </Flex>
        </Flex>
      </div>
    </Section>
  );
}
