import styles from "./styles.module.css";

export default function LabelCard({ title, subtitle, description, audioSrc }) {
  return (
    <div className={styles.root}>
      <div className={styles.left}>
        <h2>{title}</h2>
        <h2>{subtitle}</h2>
      </div>
      <div className={styles.right}>
        <p>{description}</p>
        <audio controls>
          <source src={audioSrc} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
  );
}
