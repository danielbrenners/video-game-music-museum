import styles from "./styles.module.css";
import useAudio from "../../hooks/useAudio";

export default function LabelCard({ title, subtitle, description, audioSrc }) {
  const [playing, toggle] = useAudio(audioSrc);

  return (
    <div className={styles.root}>
      <div className={styles.left}>
        <h2>{title}</h2>
        <h2>{subtitle}</h2>
        <div onClick={toggle} className={styles.audioButton}>
          <img src={playing ? "/images/pause.svg" : "/images/play.svg"} />
        </div>
      </div>
      <div className={styles.right}>
        <p>{description}</p>
      </div>
    </div>
  );
}
