import styles from "./styles.module.css";

export default function LabelCard({
  size = "half",
  src1,
  src2,
  subtitle1,
  subtitle2,
}) {
  if (size === "half") {
    return (
      <div className={styles.half}>
        <div className={styles.img}></div>
        <p className={styles.subtitle}>{subtitle1}</p>
      </div>
    );
  } else if (size === "full") {
    return (
      <div className={styles.full}>
        <div className={styles.img}></div>
        <p className={styles.subtitle}>{subtitle1}</p>
      </div>
    );
  } else if (size === "twoThirds") {
    return (
      <div className={styles.twoThirds}>
        <div className={styles.img}></div>
        <p className={styles.subtitle}>{subtitle1}</p>
      </div>
    );
  }
}
