/**
 * TODO для студентов:
 * 1. Подключить i18n через next-intl
 * 2. Подключить Redux store для глобального состояния
 */
"use client";

import type { ReactElement } from "react";
import { Flex } from "bcc-design";
import { Section } from "@/shared/components/Section";
import useMobile from "@/shared/hooks/useMobile";
import styles from "./styles.module.scss";

interface IStatCard {
  value: string;
  label: string;
}

function StatCard({ value, label }: IStatCard): ReactElement {
  return (
    <div className={styles.card}>
      <p className={styles.cardValue}>{value}</p>
      <p className={styles.cardLabel}>{label}</p>
    </div>
  );
}

export function HubStats(): ReactElement {
  const { isMobile } = useMobile();

  const stats: IStatCard[] = [
    { value: "850+", label: "специалистов в команде" },
    { value: "10+", label: "лет опыта в финтехе" },
    { value: "80+", label: "реализованных проектов" },
  ];

  return (
    <Section>
      <div className={styles.section}>
        <Flex gap={isMobile ? 12 : 16} className={styles.container}>
          {stats.map((stat) => (
            <StatCard key={stat.value} value={stat.value} label={stat.label} />
          ))}
        </Flex>
      </div>
    </Section>
  );
}
