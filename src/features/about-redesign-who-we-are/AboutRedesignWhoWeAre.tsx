/**
 * TODO для студентов:
 * 1. Подключить i18n через next-intl
 */
"use client";

import { useCallback, useRef, useState, type ReactElement } from "react";
import clsx from "clsx";
import { Section } from "@/shared/components/Section";
import { Body, Eyebrow, Heading } from "@/shared/components/Typography";
import styles from "./styles.module.scss";

const cards = [
  {
    iconSrc: "/images/redesign/about/Union.svg",
    label: "Как команда",
    title: "Разработчики, IT-визионеры и стратеги",
    description:
      "Мы объединяем технических специалистов, которые умеют думать стратегически и выстраивать продукты, а не просто писать код.",
  },
  {
    iconSrc: "/images/redesign/about/handbag.svg",
    label: "Как бизнес",
    title: "Технологический хаб нового поколения",
    description:
      "Мы создаём инфраструктуру и системы, которые позволяют финансовым продуктам масштабироваться и опережать рынок.",
  },
];

export default function AboutRedesignWhoWeAre(): ReactElement {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const index = Math.round(el.scrollLeft / (el.scrollWidth / cards.length));
    setActiveIndex(index);
  }, []);

  return (
    <Section>
      <div className={styles.container}>
        <Eyebrow className={styles.label}>Кто мы</Eyebrow>
        <Heading level="l" className={styles.title}>
          Команда и технологический хаб в одном
        </Heading>
        <div className={styles.cards} ref={scrollRef} onScroll={handleScroll}>
          {cards.map((card) => (
            <div key={card.label} className={styles.card}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={card.iconSrc}
                alt=""
                className={styles.cardIcon}
                aria-hidden="true"
              />
              <Eyebrow className={styles.cardLabel}>{card.label}</Eyebrow>
              <Heading level="m" className={styles.cardTitle}>
                {card.title}
              </Heading>
              <Body size="l" tone="muted" className={styles.cardDescription}>
                {card.description}
              </Body>
            </div>
          ))}
        </div>
        <div className={styles.dots}>
          {cards.map((card, index) => (
            <span
              key={card.label}
              className={clsx(styles.dot, {
                [styles.dotActive]: index === activeIndex,
              })}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
