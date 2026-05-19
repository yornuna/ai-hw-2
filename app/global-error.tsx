"use client";

import type { ReactElement } from "react";

export default function GlobalError({
  reset,
}: {
  error: Error;
  reset: () => void;
}): ReactElement {
  return (
    <html>
      <body>
        <h2>Something went wrong</h2>
        <button onClick={reset}>Try again</button>
      </body>
    </html>
  );
}
