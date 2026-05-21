import type { Metadata } from "next";
import { Providers } from "@/app/providers";
import "@/app/styles/globals.css";

export const metadata: Metadata = {
  title: "HW-1",
  description: "Next.js FSD Skeleton",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
