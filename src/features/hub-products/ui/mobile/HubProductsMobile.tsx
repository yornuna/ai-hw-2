"use client";

import { useId, type ReactElement, type ReactNode } from "react";
import clsx from "clsx";
import { useScrollSnapCarousel } from "@/shared/hooks/useScrollSnapCarousel";
import type { IProductCard } from "../../types";
import { MobileDots } from "./MobileDots";
import { MobileProductCard } from "./MobileProductCard";
import styles from "./styles.module.scss";

interface IHubProductsMobileProps {
  header?: ReactNode;
  cards: IProductCard[];
  ariaLabel: string;
  className?: string;
}

export function HubProductsMobile({
  header,
  cards,
  ariaLabel,
  className,
}: IHubProductsMobileProps): ReactElement {
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
          <MobileProductCard
            key={card.title}
            ref={(el) => {
              cardRefs.current[index] = el;
            }}
            {...card}
            index={index}
            totalCount={cards.length}
            eager={index === 0}
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
      <span
        className={styles.srOnly}
        aria-live="polite"
      >{`${activeIndex + 1} / ${cards.length}`}</span>
    </div>
  );
}
