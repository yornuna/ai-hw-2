"use client";

import { forwardRef, type ReactElement } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button, Flex } from "bcc-design";
import { Body, Heading } from "@/shared/components/Typography";
import type { IProductCard } from "../../types";
import styles from "./styles.module.scss";

function ChevronRight(): ReactElement {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        d="M7.5 5L12.5 10L7.5 15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

interface IMobileProductCardProps extends IProductCard {
  index: number;
  totalCount: number;
  eager?: boolean;
}

export const MobileProductCard = forwardRef<
  HTMLDivElement,
  IMobileProductCardProps
>(
  (
    {
      title,
      description,
      items,
      ctaLabel,
      ctaHref,
      imageSrc,
      imageAlt = "",
      imageBgColor,
      imagePlaceholderText,
      index,
      totalCount,
      eager = false,
    },
    ref,
  ) => {
    const ctaButton = (
      <Button
        view="accentPrimary"
        size="l"
        fullWidth
        iconRight={<ChevronRight />}
      >
        {ctaLabel}
      </Button>
    );

    return (
      <div
        ref={ref}
        className={styles.card}
        data-index={index}
        role="group"
        aria-roledescription="slide"
        aria-label={`${index + 1} / ${totalCount}`}
      >
        <Flex direction="column" gap={24}>
          <div
            className={styles.imageContainer}
            style={imageBgColor ? { backgroundColor: imageBgColor } : undefined}
          >
            {imageSrc ? (
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className={styles.productImage}
                sizes="(max-width: 992px) 90vw, 50vw"
                loading={eager ? "eager" : "lazy"}
              />
            ) : (
              <Heading
                level="m"
                tone="inverse"
                weight="regular"
                as="p"
                className={styles.imagePlaceholderText}
              >
                {imagePlaceholderText}
              </Heading>
            )}
          </div>
          <Flex direction="column" gap={12}>
            <Heading level="m" as="h3" className={styles.cardTitle}>
              {title}
            </Heading>
            <Body size="l" weight="semibold" className={styles.cardDescription}>
              {description}
            </Body>
            <div className={styles.divider}>
              <hr />
            </div>
            <ul className={styles.cardList}>
              {items.map((item) => (
                <li key={item}>
                  <Body size="l" tone="muted" as="span">
                    {item}
                  </Body>
                </li>
              ))}
            </ul>
          </Flex>
          <div className={styles.ctaButton}>
            {ctaHref ? (
              <Link href={ctaHref} className={styles.ctaLink}>
                {ctaButton}
              </Link>
            ) : (
              ctaButton
            )}
          </div>
        </Flex>
      </div>
    );
  },
);

MobileProductCard.displayName = "MobileProductCard";
