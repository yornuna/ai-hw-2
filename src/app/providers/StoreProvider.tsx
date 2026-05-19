"use client";

import { useState } from "react";
import { Provider } from "react-redux";
import { makeStore, AppStore } from "@/shared/store";

export function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  const [store] = useState<AppStore>(() => makeStore());

  return <Provider store={store}>{children}</Provider>;
}
