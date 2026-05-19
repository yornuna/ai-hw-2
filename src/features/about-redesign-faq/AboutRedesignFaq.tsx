/**
 * TODO для студентов:
 * 1. Подключить i18n через next-intl
 */
"use client";

import { useEffect, useRef, useState, type ReactElement } from "react";
import clsx from "clsx";
import { Section } from "@/shared/components/Section";
import { Body, Heading } from "@/shared/components/Typography";
import styles from "./styles.module.scss";

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    id: 1,
    question: "Возможна ли удалённая работа?",
    answer:
      "Да, мы практикуем гибридный формат. Долгосрочная аренда имущества с возможностью их последующего выкупа.",
  },
  {
    id: 2,
    question: "Что такое bcc-hub и чем он отличается от банка?",
    answer:
      "bcc-hub — это технологический хаб, который создаёт IT-продукты и инфраструктуру для финансового рынка. Мы думаем как продуктовая компания, но работаем внутри финансовой экосистемы.",
  },
  {
    id: 3,
    question: "Вы работаете только на внутренний рынок?",
    answer:
      "Нет. Наши продукты и решения используются за пределами Казахстана. Мы ориентируемся на международные стандарты разработки.",
  },
  {
    id: 4,
    question: "Есть ли тестовое задание?",
    answer:
      "Зависит от позиции. Для некоторых ролей есть небольшое практическое задание, для других — только технические интервью.",
  },
  {
    id: 5,
    question: "Как устроена обратная связь внутри команд?",
    answer:
      "Мы проводим регулярные 1-on-1 встречи, квартальные ревью и придерживаемся открытой культуры обратной связи на всех уровнях.",
  },
];

function ChevronIcon(): ReactElement {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5 7.5L10 12.5L15 7.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function AccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}): ReactElement {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setHeight(isOpen ? (contentRef.current?.scrollHeight ?? 0) : 0);
  }, [isOpen]);

  return (
    <div className={styles.accordionItem}>
      <button
        className={styles.accordionHeader}
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <Body size="m" weight="semibold" as="span" className={styles.question}>
          {item.question}
        </Body>
        <span className={clsx(styles.chevron, { [styles.open]: isOpen })}>
          <ChevronIcon />
        </span>
      </button>
      <div className={styles.accordionBody} style={{ height }}>
        <div ref={contentRef} className={styles.accordionContent}>
          <Body size="m" tone="muted">
            {item.answer}
          </Body>
        </div>
      </div>
    </div>
  );
}

export default function AboutRedesignFaq(): ReactElement {
  const [openId, setOpenId] = useState<number>(0);

  return (
    <Section>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <Heading level="l" className={styles.title}>
            Часто задаваемые вопросы
          </Heading>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/redesign/about/about-lines.webp"
            alt=""
            className={styles.decoration}
            aria-hidden="true"
          />
        </div>

        <div className={styles.rightSide}>
          {FAQ_ITEMS.map((item) => (
            <AccordionItem
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              onToggle={() =>
                setOpenId((prev) => (prev === item.id ? 0 : item.id))
              }
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
