import { createElement, type ReactElement } from "react";
import { cx, toneClass, weightClass } from "./classNames";
import type { BaseTypographyProps, BodySize } from "./Typography.types";
import styles from "./styles.module.scss";

interface BodyProps extends BaseTypographyProps {
  size?: BodySize;
}

const SIZE_CLASS: Record<BodySize, string> = {
  l: styles.bodyL,
  m: styles.bodyM,
  s: styles.bodyS,
};

export function Body({
  size = "m",
  as = "p",
  className,
  tone,
  weight,
  children,
  ...rest
}: BodyProps): ReactElement {
  return createElement(
    as,
    {
      className: cx(
        styles.base,
        styles.body,
        SIZE_CLASS[size],
        toneClass(tone),
        weightClass(weight),
        className,
      ),
      ...rest,
    },
    children,
  );
}
