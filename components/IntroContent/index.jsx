import styles from "./styles.module.css";
import cx from "classnames";

export default function IntroContent({ content }) {
  return (
    <div className={styles.root}>
      {content.map((block, index) => {
        return (
          <div
            className={cx(styles.block, { [styles.firstBlock]: index === 0 })}
          >
            <h2>{block.title}</h2>
            <p>{block.description}</p>
          </div>
        );
      })}
    </div>
  );
}
