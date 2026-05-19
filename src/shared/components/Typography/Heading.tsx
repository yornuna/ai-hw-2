import { createElement, type ReactElement } from "react";
import { cx, toneClass, weightClass } from "./classNames";
import type { BaseTypographyProps, HeadingLevel } from "./Typography.types";
import styles from "./styles.module.scss";

interface HeadingProps extends BaseTypographyProps {
  level?: HeadingLevel;
  balance?: boolean;
}

const LEVEL_CLASS: Record<HeadingLevel, string> = {
  xl: styles.headingXl,
  l: styles.headingL,
  ml: styles.headingML,
  m: styles.headingM,
  s: styles.headingS,
};

const LEVEL_TAG: Record<HeadingLevel, string> = {
  xl: "h1",
  l: "h2",
  ml: "h3",
  m: "h3",
  s: "h4",
};

export function Heading({
  level = "l",
  as,
  className,
  tone,
  weight,
  balance = true,
  children,
  ...rest
}: HeadingProps): ReactElement {
  const tag = as ?? LEVEL_TAG[level];
  return createElement(
    tag,
    {
      className: cx(
        styles.base,
        styles.heading,
        LEVEL_CLASS[level],
        toneClass(tone),
        weightClass(weight),
        !balance && styles.headingNoBalance,
        className,
      ),
      ...rest,
    },
    children,
  );
}
