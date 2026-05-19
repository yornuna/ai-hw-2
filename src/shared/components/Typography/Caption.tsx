import { createElement, type ReactElement } from "react";
import { cx, toneClass, weightClass } from "./classNames";
import type { BaseTypographyProps } from "./Typography.types";
import styles from "./styles.module.scss";

export function Caption({
  as = "span",
  className,
  tone,
  weight,
  children,
  ...rest
}: BaseTypographyProps): ReactElement {
  return createElement(
    as,
    {
      className: cx(
        styles.base,
        styles.caption,
        toneClass(tone),
        weightClass(weight),
        className,
      ),
      ...rest,
    },
    children,
  );
}
