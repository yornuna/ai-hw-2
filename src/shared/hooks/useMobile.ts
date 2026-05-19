"use client";

import { useEffect, useState } from "react";
import { useLayoutContext } from "bcc-design";

export default function useMobile(): { isMobile: boolean; isDesktop: boolean } {
  const { isMediaActive } = useLayoutContext();
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setHydrated(true);
  }, []);

  if (!hydrated) {
    return { isMobile: true, isDesktop: false };
  }

  const isMobile = !isMediaActive("md");
  return { isMobile, isDesktop: !isMobile };
}
