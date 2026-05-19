/**
 * TODO для студентов:
 * 1. Заменить MOCK_VACANCIES на реальный API-запрос через useQuery
 * 2. Подключить useQuery({ queryFn: () => filterVacanciesRequest(...) })
 * 3. Добавить пагинацию
 */
"use client";

import React from "react";
import VacanciesList from "./ui/vacancies-list/VacanciesList";
import { MOCK_VACANCIES_RESPONSE } from "@/shared/mocks/vacancies";

export default function VacanciesListFilterable(): React.ReactElement {
  const isLoading = false;
  const error = null;
  const data = MOCK_VACANCIES_RESPONSE;

  return <VacanciesList isLoading={isLoading} error={error} data={data} />;
}
