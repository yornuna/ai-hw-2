"use client";

import type { ReactElement } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss";

const NAV_LINKS = [
  { label: "О Компании", href: "/about" },
  { label: "Продукты", href: "#" },
  { label: "Вакансии", href: "/vacancies" },
  { label: "Кандидатам", href: "#" },
];

export function Navbar(): ReactElement {
  return (
    <nav className={styles.navbar} id="navbar">
      <div className={styles.navContainer}>
        <div className={styles.content}>
          <Link href="/" className={styles.logo}>
            <Image
              src="/images/redesign/bcc-hub-logo.svg"
              alt="BCC Hub"
              width={168}
              height={32}
              priority
            />
          </Link>

          <div className={styles.navContent}>
            <div className={styles.links}>
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={styles.navLink}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className={styles.extras}>
              <button type="button" className={styles.locationBtn}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M8 1.5C5.515 1.5 3.5 3.515 3.5 6c0 3.375 4.5 8.5 4.5 8.5S12.5 9.375 12.5 6c0-2.485-2.015-4.5-4.5-4.5zm0 6.125A1.625 1.625 0 1 1 8 4.25a1.625 1.625 0 0 1 0 3.375z"
                    fill="currentColor"
                  />
                </svg>
                Алматы
              </button>

              <button type="button" className={styles.langBtn}>
                Рус
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M4 6l4 4 4-4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
