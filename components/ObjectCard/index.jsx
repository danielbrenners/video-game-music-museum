import styles from "./styles.module.css";
import Image from "next/image";

export default function ObjectCard({ href, src, imgWidth }) {
  return (
    <a href={href} className={styles.card}>
      <div
        style={{
          width: imgWidth,
          height: "100%",
          position: "relative",
          margin: "0 auto",
        }}
      >
        <Image src={src} layout="fill" objectFit="contain" />
      </div>
    </a>
  );
}
