import clsx from "clsx";
import type { TypographyTone, TypographyWeight } from "./Typography.types";
import styles from "./styles.module.scss";

export function toneClass(tone?: TypographyTone): string | undefined {
  if (!tone) return undefined;
  switch (tone) {
    case "inverse":
      return styles.toneInverse;
    case "muted":
      return styles.toneMuted;
    case "brand":
      return styles.toneBrand;
    default:
      return styles.toneDefault;
  }
}

export function weightClass(weight?: TypographyWeight): string | undefined {
  if (!weight) return undefined;
  switch (weight) {
    case "regular":
      return styles.weightRegular;
    case "medium":
      return styles.weightMedium;
    case "bold":
      return styles.weightBold;
    default:
      return styles.weightSemibold;
  }
}

export function cx(
  ...classNames: Array<string | undefined | false>
): string | undefined {
  return clsx(classNames) || undefined;
}
