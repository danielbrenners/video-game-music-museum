import Head from "next/head";
import styles from "./styles.module.css";
import Layout from "../../components/Layout";
import Grid from "../../components/Grid";
import IntroContent from "../../components/IntroContent";
import LabelCard from "../../components/LabelCard";
import MediaCard from "../../components/MediaCard";
import QuoteCard from "../../components/QuoteCard";
import Image from "next/image";
import SoundCard from "../../components/SoundCard";

export default function Atari2600() {
  return (
    <>
      <Head>
        <title>Atari 2600</title>
        <meta name="description" content="Atari 2600" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className={styles.header}>
          <div className={styles.heroContent}>
            <div>
              <h1 className={styles.title}>Atari 2600</h1>

              <p className={styles.description}>1977</p>
              <div style={{ display: "flex" }}>
                <SoundCard waveType="square" />
                <SoundCard waveType="noise" />
              </div>
            </div>
          </div>
          <div className={styles.heroImg}>
            <Image
              src={"/images/atari_2600/atari_2600_1.jpg"}
              layout="fill"
              objectFit="contain"
              objectPosition="right"
            />
          </div>
        </div>

        <Grid>
          <IntroContent
            content={[
              {
                title: "Television Interface Adapter (TIA)",
                description:
                  "Although not a full-fledged sound card, the Atari 2600 contained a Television Interface Adapter (TIA) that allowed for two channels, or voices. The first voice was a square wave, and the second was a noise channel. It was monoaural sound and 4-bits of volume control. While simple, this allowed for the beginning of music in home video game entertainment.",
              },
            ]}
          />

          <LabelCard
            title="Combat"
            subtitle="Atari, 1977"
            description="The first video game with sound. The sound, from which the name originates, was generated from a built in ampilifier. The wall sound and the paddle sound create an octave, while the point sound is a disharmonic semitone to be more jarring."
            audioSrc="/audio/atari_2600/combat.mp3"
          />

          <MediaCard
            size="portrait"
            subtitle1="Combat promotional art."
            src1="/images/atari_2600/combat.jpg"
          />
          {/*<MediaCard size="full" subtitle1="Figure 1. Hello world" />*/}
        </Grid>
      </Layout>
    </>
  );
}
