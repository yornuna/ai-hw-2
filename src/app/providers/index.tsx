"use client";

import { QueryProvider } from "./QueryProvider";
import { StoreProvider } from "./StoreProvider";

export function Providers({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  return (
    <StoreProvider>
      <QueryProvider>{children}</QueryProvider>
    </StoreProvider>
  );
}
