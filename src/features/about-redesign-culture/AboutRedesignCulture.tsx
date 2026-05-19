/**
 * TODO для студентов:
 * 1. Подключить i18n через next-intl
 */
import type { ReactElement } from "react";
import { Section } from "@/shared/components/Section";
import { Body, Eyebrow, Heading } from "@/shared/components/Typography";
import styles from "./styles.module.scss";

export default function AboutRedesignCulture(): ReactElement {
  return (
    <Section>
      <div className={styles.container}>
        <Eyebrow className={styles.label}>Культура</Eyebrow>
        <Heading level="l" className={styles.title}>
          Среда, где можно влиять на результат и расти
        </Heading>

        <div className={styles.mainGrid}>
          <div className={styles.leftCard}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/redesign/about/culture-person.webp"
              alt="Сотрудник bcc-hub"
              className={styles.personImage}
            />
          </div>

          <div className={styles.rightBento}>
            <div className={styles.bentoTopRow}>
              <div className={styles.bentoCard}>
                <div className={styles.bentoTextBlock}>
                  <Heading level="m" className={styles.bentoCardTitle}>
                    Ownership
                  </Heading>
                  <Body size="l" tone="muted" className={styles.bentoCardDesc}>
                    вы влияете на продукт и принимаете решения
                  </Body>
                </div>
              </div>

              <div className={styles.bentoCard}>
                <div className={styles.bentoTextBlock}>
                  <Heading level="m" className={styles.bentoCardTitle}>
                    Transparency
                  </Heading>
                  <Body size="l" tone="muted" className={styles.bentoCardDesc}>
                    открытая обратная связь и понятные критерии
                  </Body>
                </div>
              </div>
            </div>

            <div className={styles.bentoCardBottom}>
              <div className={styles.bentoTextBlock}>
                <Heading level="m" className={styles.bentoCardTitle}>
                  Growth
                </Heading>
                <Body size="l" tone="muted" className={styles.bentoCardDesc}>
                  обучение, менторство и карьерные треки
                </Body>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
