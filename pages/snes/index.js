import Head from "next/head";
import styles from "./styles.module.css";
import Layout from "../../components/Layout";
import Grid from "../../components/Grid";
import IntroContent from "../../components/IntroContent";
import LabelCard from "../../components/LabelCard";
import MediaCard from "../../components/MediaCard";
import QuoteCard from "../../components/QuoteCard";
import Image from "next/image";

export default function SNES() {
  return (
    <>
      <Head>
        <title>SNES</title>
        <meta name="description" content="SNES" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className={styles.header}>
          <div className={styles.heroContent}>
            <div>
              <h1 className={styles.title}>SNES</h1>

              <p className={styles.description}>1990</p>
            </div>
          </div>
          <div className={styles.heroImg}>
            <Image
              src={"/images/snes/snes_2.jpg"}
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
                title: "8 Sample Channels",
                description:
                  "Thr (PCM), it was rarely used due to the memory restrictions.",
              },
            ]}
          />
          <LabelCard
            title="Donkey Kong Country 2"
            subtitle="Rare, 1995"
            description="Tjarring."
          />

          <MediaCard size="half" subtitle1="Figure 1. Hello world" />
          <MediaCard size="half" subtitle1="Figure 1. Hello world" />

          <LabelCard
            title="Chrono Trigger"
            subtitle="Square, 1995"
            description="The first video game with music. Although not during gameplay, this represented the first time music was used to create an atmosphere in a game."
          />

          <MediaCard size="twoThirds" subtitle1="Figure 1. Hello world" />
          <QuoteCard
            quote="The ultimate goal for me in making music, or at least one of the main goals for me, is to create memorable melodies. That goal is there regardless of the tools we have."
            author="Koji Kondo"
          />

          <LabelCard
            title="Mega Man X"
            subtitle="Capcom, 1993"
            description="The first game to have continuous music, with sound effects overlaid during game play. The increase in tempo of the iconic four tones was due to a programming bug, but was kept as it creates a feeling of urgency for the player."
          />
          <MediaCard size="half" subtitle1="Figure 1. Hello world" />

          <MediaCard size="full" subtitle1="Figure 1. Hello world" />
        </Grid>
      </Layout>
    </>
  );
}
