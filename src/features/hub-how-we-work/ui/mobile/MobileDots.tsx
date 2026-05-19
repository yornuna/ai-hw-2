"use client";

import type { KeyboardEvent, MutableRefObject, ReactElement } from "react";
import clsx from "clsx";
import styles from "./styles.module.scss";

interface IMobileDotsProps {
  count: number;
  activeIndex: number;
  ariaLabel: string;
  onSelect: (index: number) => void;
  onKeyDown: (event: KeyboardEvent<HTMLButtonElement>, index: number) => void;
  dotRefs: MutableRefObject<(HTMLButtonElement | null)[]>;
}

export function MobileDots({
  count,
  activeIndex,
  ariaLabel,
  onSelect,
  onKeyDown,
  dotRefs,
}: IMobileDotsProps): ReactElement {
  return (
    <div className={styles.dots} role="tablist" aria-label={ariaLabel}>
      {Array.from({ length: count }, (_, index) => (
        <button
          key={index}
          ref={(el) => {
            dotRefs.current[index] = el;
          }}
          type="button"
          role="tab"
          aria-selected={index === activeIndex}
          aria-label={`${index + 1} / ${count}`}
          tabIndex={index === activeIndex ? 0 : -1}
          className={clsx(
            styles.dot,
            index === activeIndex && styles.dotActive,
          )}
          onClick={() => onSelect(index)}
          onKeyDown={(event) => onKeyDown(event, index)}
        />
      ))}
    </div>
  );
}
