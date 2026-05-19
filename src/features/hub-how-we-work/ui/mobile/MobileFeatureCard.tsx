"use client";

import { forwardRef, type CSSProperties } from "react";
import Image from "next/image";
import { Flex } from "bcc-design";
import clsx from "clsx";
import type { IFeatureCard } from "../../types";
import styles from "./styles.module.scss";

interface IMobileFeatureCardProps extends IFeatureCard {
  index: number;
  totalCount: number;
}

export const MobileFeatureCard = forwardRef<
  HTMLDivElement,
  IMobileFeatureCardProps
>(({ title, variant, icon, bgImage, index, totalCount }, ref) => {
  return (
    <div
      ref={ref}
      className={clsx(styles.card, styles[variant])}
      style={{ "--card-bg": `url('${bgImage}')` } as CSSProperties}
      data-index={index}
      role="group"
      aria-roledescription="slide"
      aria-label={`${index + 1} / ${totalCount}`}
    >
      <Flex direction="column" gap={12}>
        <Image src={icon} alt="" width={40} height={40} />
        <p className={styles.title}>{title}</p>
      </Flex>
    </div>
  );
});

MobileFeatureCard.displayName = "MobileFeatureCard";
