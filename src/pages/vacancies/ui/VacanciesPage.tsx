import type { ReactElement } from "react";
import VacanciesFilter from "@/features/vacancies-filter";
import VacanciesListFilterable from "@/features/vacancies-list-filterable";
import { CandidatesContactForm } from "@/features/candidates-contact-form";

export function VacanciesPage(): ReactElement {
  return (
    <main>
      <VacanciesFilter>
        <VacanciesListFilterable />
      </VacanciesFilter>
      <CandidatesContactForm />
    </main>
  );
}
