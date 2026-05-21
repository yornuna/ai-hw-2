import styles from "./HomePage.module.css";

export function HomePage(): React.JSX.Element {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>HW-1 — Next.js FSD Skeleton</h1>
      <p className={styles.description}>
        Built with Feature-Sliced Design, Redux Toolkit, and TanStack React
        Query.
      </p>
      <ul className={styles.stack}>
        <li>Next.js 16 — App Router</li>
        <li>Feature-Sliced Design (FSD)</li>
        <li>Redux Toolkit — client state</li>
        <li>TanStack React Query — server state</li>
        <li>CSS Modules — styling</li>
      </ul>
    </main>
  );
}
