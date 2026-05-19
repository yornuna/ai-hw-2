"use client";

import React from "react";
import { Flex } from "bcc-design";
import { Body, Heading } from "@/shared/components/Typography";
import styles from "./styles.module.css";

interface Vacancy {
  id: string;
  title: string;
  short_description: string;
  direction: string;
  experience_level: string;
  work_format: string;
  tags: string[];
  technologies: string[];
  city: string;
  salary_from?: number;
  salary_to?: number;
  created_at: string;
  on_top: boolean;
}

interface IVacanciesListProps {
  isLoading: boolean;
  error: Error | null;
  data: { total_hits: number; vacancies: Vacancy[] } | undefined;
}

function VacancyCard({ vacancy }: { vacancy: Vacancy }): React.ReactElement {
  return (
    <div className={styles.card}>
      <Flex direction="column" gap={12}>
        <Flex justifyContent="space-between" alignItems="flex-start">
          <Heading level="s" as="h3">
            {vacancy.title}
          </Heading>
          {vacancy.on_top && <span className={styles.newBadge}>Новая</span>}
        </Flex>
        <Body size="m" tone="muted">
          {vacancy.short_description}
        </Body>
        <Flex gap={8} style={{ flexWrap: "wrap" }}>
          <span className={styles.chip}>{vacancy.city}</span>
          <span className={styles.chip}>
            {vacancy.work_format === "hybrid"
              ? "Гибрид"
              : vacancy.work_format === "office"
                ? "Офис"
                : "Удалённый"}
          </span>
          <span className={styles.chip}>{vacancy.experience_level}</span>
        </Flex>
        {vacancy.salary_from && (
          <Body size="s">
            от {vacancy.salary_from.toLocaleString("ru-RU")} ₸
          </Body>
        )}
      </Flex>
    </div>
  );
}

export default function VacanciesList({
  isLoading,
  error,
  data,
}: IVacanciesListProps): React.ReactElement {
  if (isLoading) {
    return (
      <Body size="m" tone="muted">
        Загрузка...
      </Body>
    );
  }

  if (error) {
    return (
      <Body size="m" tone="muted">
        Произошла ошибка при загрузке вакансий
      </Body>
    );
  }

  if (!data || data.total_hits === 0) {
    return (
      <Body size="m" tone="muted">
        Вакансий не найдено
      </Body>
    );
  }

  return (
    <Flex
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      gap={16}
      width="100%"
    >
      <Body size="m" weight="semibold">
        Найдено вакансий: {data.total_hits}
      </Body>
      {data.vacancies.map((v) => (
        <VacancyCard key={v.id} vacancy={v} />
      ))}
    </Flex>
  );
}
