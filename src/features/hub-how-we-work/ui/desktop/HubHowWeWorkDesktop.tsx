"use client";

import type { CSSProperties, ReactElement, ReactNode } from "react";
import Image from "next/image";
import { Flex } from "bcc-design";
import clsx from "clsx";
import type { IFeatureCard } from "../../types";
import styles from "./styles.module.scss";

interface IHubHowWeWorkDesktopProps {
  header: ReactNode;
  cards: IFeatureCard[];
}

export function HubHowWeWorkDesktop({
  header,
  cards,
}: IHubHowWeWorkDesktopProps): ReactElement {
  return (
    <div className={styles.root}>
      {header}
      <div className={styles.cardsContainer}>
        {cards.map((card) => (
          <DesktopFeatureCard key={card.variant} {...card} />
        ))}
      </div>
    </div>
  );
}

function DesktopFeatureCard({
  title,
  variant,
  icon,
  bgImage,
}: IFeatureCard): ReactElement {
  return (
    <div
      className={clsx(styles.featureCard, styles[variant])}
      style={{ "--card-bg": `url('${bgImage}')` } as CSSProperties}
    >
      <Flex direction="column" gap={12}>
        <Image src={icon} alt="" width={48} height={48} />
        <p className={styles.featureTitle}>{title}</p>
      </Flex>
    </div>
  );
}
