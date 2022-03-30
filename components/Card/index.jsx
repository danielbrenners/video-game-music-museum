import styles from "./styles.module.css";

export default function Card({ href, title, description }) {
  return (
    <a href={href} className={styles.card}>
      <h2>{title}</h2>
      <p>{description}</p>
    </a>
  );
}
