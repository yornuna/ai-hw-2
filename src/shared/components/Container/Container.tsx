import type { ReactElement, ReactNode } from "react";
import clsx from "clsx";
import styles from "./styles.module.scss";

interface ContainerProps {
  className?: string;
  children: ReactNode;
}

export function Container({
  className,
  children,
}: ContainerProps): ReactElement {
  return <div className={clsx(styles.container, className)}>{children}</div>;
}
