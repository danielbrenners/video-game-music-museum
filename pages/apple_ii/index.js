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

export default function AppleII() {
  return (
    <>
      <Head>
        <title>Apple II</title>
        <meta name="description" content="Apple II" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className={styles.header}>
          <div className={styles.heroContent}>
            <div>
              <h1 className={styles.title}>Apple II</h1>

              <p className={styles.description}>1977</p>
              <div style={{ display: "flex" }}>
                <SoundCard waveType="square" />
              </div>
            </div>
          </div>
          <div className={styles.heroImg}>
            <Image
              src={"/images/apple_ii/apple_ii_2.jpg"}
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
                title: "Beeper Speakers",
                description:
                  "The beeper speaker on the Apple II is the only sound producing element of the computer. It is directly controlled by the CPU, instead of a dedicated sound chip. Because of this, to make a sound a the CPU had to divert all of its resources to the speaker, interrupting any other aspect of the game in the mean time. Games produced for the Apple II couldn't play music and video at the same time, only a few basic clicks. When video wasn't being played, developers were limited to a single square wave, a constant volume, and a few system sounds that were used to notify the user of an error or startup.",
              },
            ]}
          />
          <LabelCard
            title="Karateka"
            subtitle="Jordan Mechner, 1984"
            description="One of the earliest martial arts fighting games, inspired by Japanese culture and early Disney animated films and silent pictures. "
            audioSrc="/audio/apple_ii/karateka.mp3"
          />

          <MediaCard
            size="portrait"
            subtitle1="Karateka cover art.."
            src1="/images/apple_ii/karateka.jpg"
          />
          <MediaCard size="full" src1="/images/apple_ii/apple_ii_3.jpg" />
        </Grid>
      </Layout>
    </>
  );
}
