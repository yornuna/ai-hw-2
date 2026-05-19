import { ReactNode } from "react";

export type Tag = {
  value: number | string;
  label: string;
};

export interface IVacanciesFilterCommonProps {
  form: unknown;
  tags: Tag[];
  title: ReactNode;
  children: ReactNode;
  removeTag: (value: Tag["value"]) => void;
  showResetButton?: boolean;
  handleFormSubmit: (data: unknown) => void;
  handleFilterReset: () => void;
  handleSearchClear: (name: string) => void;
  handleSearchSubmit: (name: string, value: string) => void;
}
