import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "@/app/providers";
import { Navbar } from "@/widgets/navbar";
import "@/app/styles/bcc-design.css";
import "@/app/styles/globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "BCC Hub",
  description: "Платформы и решения bcc hub",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  return (
    <html
      lang="ru"
      className={`${inter.variable} bcc-root bcc-root_theme_bcc-hub-light`}
    >
      <body className="bcc-root bcc-root_theme_bcc-hub-light">
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
