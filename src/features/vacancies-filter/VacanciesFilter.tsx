/**
 * TODO для студентов:
 * 1. Подключить хук useVacanciesFilter
 * 2. Добавить поиск, фильтры по направлению, формату и опыту
 * 3. Подключить мобильную версию фильтра
 */
"use client";

import { type ReactElement } from "react";
import { Flex } from "bcc-design";
import { Heading, Body } from "@/shared/components/Typography";
import VacanciesHero from "./ui/vacancies-hero/VacanciesHero";
import styles from "./styles.module.scss";

export default function VacanciesFilter({
  children,
}: {
  children: ReactElement;
}): ReactElement {
  return (
    <div className={styles.wrapper}>
      <Flex direction="column" gap={32} width="100%">
        <VacanciesHero />
        <Flex gap={32} width="100%" alignItems="flex-start">
          <aside className={styles.aside}>
            <div className={styles.filterPlaceholder}>
              <Heading level="s" as="p">
                Фильтры
              </Heading>
            </div>
          </aside>
          <Flex
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            width="100%"
            gap={24}
            className={styles.content}
          >
            <Flex direction="column" gap={8} width="100%">
              <Heading level="m" className={styles.sectionTitle}>
                Актуальные позиции bcc-hub
              </Heading>
              <Body size="m" tone="muted" className={styles.sectionSubtitle}>
                Для каждой роли мы показываем задачи, требования и формат работы
                — чтобы вы могли принять осознанное решение
              </Body>
            </Flex>
            {children}
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
}
