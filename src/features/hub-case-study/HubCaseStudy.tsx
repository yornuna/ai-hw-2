/**
 * TODO для студентов:
 * 1. Подключить i18n через next-intl
 */
"use client";

import type { ReactElement } from "react";
import { Flex } from "bcc-design";
import { Section } from "@/shared/components/Section";
import { Heading } from "@/shared/components/Typography";
import styles from "./styles.module.scss";

interface ICaseStatCard {
  value: string;
  label: string;
}

function CaseStatCard({ value, label }: ICaseStatCard): ReactElement {
  return (
    <div className={styles.statCard}>
      <p className={styles.statValue}>{value}</p>
      <p className={styles.statLabel}>{label}</p>
    </div>
  );
}

export function HubCaseStudy(): ReactElement {
  const stats: ICaseStatCard[] = [
    { value: "1.9 млн", label: "MAU" },
    { value: "~80%", label: "операций в цифровом канале" },
    { value: "+100 млн", label: "процессов в год" },
  ];

  return (
    <Section>
      <div className={styles.section}>
        <Flex direction="column" gap={40}>
          <Flex
            alignItems="center"
            justifyContent="space-between"
            className={styles.header}
          >
            <Heading level="l" className={styles.sectionTitle}>
              Production-кейс centercredit
            </Heading>
          </Flex>

          <Flex gap={24} className={styles.statsContainer}>
            {stats.map((stat) => (
              <CaseStatCard
                key={stat.value}
                value={stat.value}
                label={stat.label}
              />
            ))}
          </Flex>
        </Flex>
      </div>
    </Section>
  );
}
