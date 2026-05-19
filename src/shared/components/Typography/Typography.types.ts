import type { ElementType, HTMLAttributes, ReactNode } from "react";

export type TypographyTone = "default" | "inverse" | "muted" | "brand";
export type TypographyWeight = "regular" | "medium" | "semibold" | "bold";

export interface BaseTypographyProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  className?: string;
  tone?: TypographyTone;
  weight?: TypographyWeight;
  children?: ReactNode;
}

export type HeadingLevel = "xl" | "l" | "ml" | "m" | "s";
export type BodySize = "l" | "m" | "s";
