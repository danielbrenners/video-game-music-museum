import Image from "next/image";
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
        <div className={styles.img}>
          <Image
            src={src1}
            className={styles.img}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <p className={styles.subtitle}>{subtitle1}</p>
      </div>
    );
  } else if (size === "twoThirds") {
    return (
      <div className={styles.twoThirds}>
        <div className={styles.img}>
          <Image
            src={src1}
            className={styles.img}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <p className={styles.subtitle}>{subtitle1}</p>
      </div>
    );
  } else if (size === "portrait") {
    return (
      <div className={styles.portrait}>
        <div className={styles.img}>
          <Image
            src={src1}
            className={styles.img}
            layout="fill"
            objectFit="contain"
            objectPosition="center top"
          />
        </div>
        <p className={styles.subtitle}>{subtitle1}</p>
      </div>
    );
  }
}
