"use client";

import type { ReactElement } from "react";
import { Body, Heading } from "@/shared/components/Typography";
import styles from "./styles.module.scss";

export default function VacanciesHero(): ReactElement {
  return (
    <header className={styles.hero}>
      <Heading level="l" className={styles.title}>
        {"Роли, где важен не только стек — но и "}
        <span className={styles.titleAccent}>мышление</span>
      </Heading>
      <Body size="l" tone="muted" className={styles.subtitle}>
        Выбирайте направление и находите задачи, которые вам откликаются
      </Body>
    </header>
  );
}
