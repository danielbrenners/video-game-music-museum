import styles from "./styles.module.css";

export default function QuoteCard({ quote, author }) {
  return (
    <div className={styles.root}>
      <h2>{quote}</h2>
      <p>{author}</p>
    </div>
  );
}
