"use client";

import { useId, type ReactElement, type ReactNode } from "react";
import clsx from "clsx";
import { useScrollSnapCarousel } from "@/shared/hooks/useScrollSnapCarousel";
import type { IFeatureCard } from "../../types";
import { MobileDots } from "./MobileDots";
import { MobileFeatureCard } from "./MobileFeatureCard";
import styles from "./styles.module.scss";

interface IHubHowWeWorkMobileProps {
  header?: ReactNode;
  cards: IFeatureCard[];
  ariaLabel: string;
  className?: string;
}

export function HubHowWeWorkMobile({
  header,
  cards,
  ariaLabel,
  className,
}: IHubHowWeWorkMobileProps): ReactElement {
  const headingId = useId();
  const {
    stripRef,
    cardRefs,
    dotRefs,
    activeIndex,
    scrollTo,
    handleDotKeyDown,
  } = useScrollSnapCarousel(cards.length);

  return (
    <div
      className={clsx(styles.root, className)}
      role="region"
      aria-roledescription="carousel"
      aria-labelledby={header ? headingId : undefined}
      aria-label={header ? undefined : ariaLabel}
    >
      {header && (
        <div id={headingId} className={styles.header}>
          {header}
        </div>
      )}
      <div ref={stripRef} className={styles.strip}>
        {cards.map((card, index) => (
          <MobileFeatureCard
            key={card.variant}
            ref={(el) => {
              cardRefs.current[index] = el;
            }}
            {...card}
            index={index}
            totalCount={cards.length}
          />
        ))}
      </div>
      <MobileDots
        count={cards.length}
        activeIndex={activeIndex}
        ariaLabel={ariaLabel}
        onSelect={scrollTo}
        onKeyDown={handleDotKeyDown}
        dotRefs={dotRefs}
      />
      <span className={styles.srOnly} aria-live="polite">
        {`${activeIndex + 1} / ${cards.length}`}
      </span>
    </div>
  );
}
