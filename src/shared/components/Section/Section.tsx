import type { ReactElement, ReactNode } from "react";
import clsx from "clsx";
import { Container } from "@/shared/components/Container";
import styles from "./styles.module.scss";

interface SectionProps {
  bleed?: boolean;
  className?: string;
  containerClassName?: string;
  id?: string;
  "aria-label"?: string;
  "aria-labelledby"?: string;
  children: ReactNode;
}

export function Section({
  bleed = false,
  className,
  containerClassName,
  id,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledBy,
  children,
}: SectionProps): ReactElement {
  return (
    <section
      id={id}
      className={clsx(styles.section, className)}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
    >
      <Container
        className={clsx(bleed && styles.containerBleed, containerClassName)}
      >
        {children}
      </Container>
    </section>
  );
}
