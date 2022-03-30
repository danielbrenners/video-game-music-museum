import styles from "./styles.module.css";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.hr} />
        {children}
      </main>

      <footer className={styles.footer}>&lt;3 Daniel Brenners</footer>
    </div>
  );
}
