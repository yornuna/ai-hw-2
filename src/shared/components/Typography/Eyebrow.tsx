import { createElement, type ReactElement } from "react";
import { cx, toneClass, weightClass } from "./classNames";
import type { BaseTypographyProps } from "./Typography.types";
import styles from "./styles.module.scss";

interface EyebrowProps extends BaseTypographyProps {
  uppercase?: boolean;
}

export function Eyebrow({
  as = "span",
  className,
  tone,
  weight,
  uppercase = false,
  children,
  ...rest
}: EyebrowProps): ReactElement {
  return createElement(
    as,
    {
      className: cx(
        styles.base,
        styles.eyebrow,
        uppercase && styles.eyebrowUppercase,
        toneClass(tone),
        weightClass(weight),
        className,
      ),
      ...rest,
    },
    children,
  );
}
