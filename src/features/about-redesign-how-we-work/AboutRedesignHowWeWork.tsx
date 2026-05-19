/**
 * TODO для студентов:
 * 1. Подключить i18n через next-intl
 */
import { Fragment, type ReactElement } from "react";
import { Section } from "@/shared/components/Section";
import { Body, Eyebrow, Heading } from "@/shared/components/Typography";
import styles from "./styles.module.scss";

const steps = [
  "Ставим задачи, где важны технологии, понимание бизнеса, регуляции и масштаба",
  "Предлагаем решения, которые становятся частью продуктов по всему миру",
  "Строим команды с чёткими зонами ответственности, прозрачностью и регулярной обратной связью",
];

export default function AboutRedesignHowWeWork(): ReactElement {
  return (
    <Section bleed>
      <div className={styles.container}>
        <div className={styles.inner}>
          <div className={styles.textContainer}>
            <Eyebrow className={styles.label}>Как мы работаем</Eyebrow>
            <Heading level="l" className={styles.title}>
              Ответственность уже встроена в процессы
            </Heading>
          </div>

          <div className={styles.contentContainer}>
            <div className={styles.stepsRow}>
              {steps.map((step, index) => (
                <Fragment key={step}>
                  <div className={styles.stepBlock}>
                    <Body size="l" as="span">
                      {step}
                    </Body>
                  </div>
                  {index < steps.length - 1 && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src="/images/redesign/about/plusOutlined.svg"
                      alt=""
                      className={styles.plusIcon}
                      aria-hidden="true"
                    />
                  )}
                </Fragment>
              ))}
            </div>

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/redesign/about/drag.svg"
              alt=""
              className={styles.equalsIcon}
              aria-hidden="true"
            />

            <div className={styles.purpleBanner}>
              <Eyebrow tone="inverse">
                Это даёт фокус на результате без лишнего шума и бюрократии
              </Eyebrow>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
