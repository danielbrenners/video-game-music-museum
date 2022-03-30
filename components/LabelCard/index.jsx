import styles from "./styles.module.css";

export default function LabelCard({ title, subtitle, description }) {
  return (
    <div className={styles.root}>
      <div className={styles.left}>
        <h2>{title}</h2>
        <h2>{subtitle}</h2>
      </div>
      <p>{description}</p>
    </div>
  );
}
