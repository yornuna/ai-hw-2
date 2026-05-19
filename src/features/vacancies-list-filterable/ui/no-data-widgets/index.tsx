import React from "react";
import { Body } from "@/shared/components/Typography";
import styles from "./styles.module.scss";

export function LoadingSpinner(): React.ReactElement {
  return (
    <div className={styles.center}>
      <Body size="m" tone="muted">
        Загрузка...
      </Body>
    </div>
  );
}

export function ErrorWidget(): React.ReactElement {
  return (
    <div className={styles.center}>
      <Body size="m" tone="muted">
        Ошибка загрузки
      </Body>
    </div>
  );
}

export function NoResultsWidget(): React.ReactElement {
  return (
    <div className={styles.center}>
      <Body size="m" tone="muted">
        Вакансий не найдено
      </Body>
    </div>
  );
}
