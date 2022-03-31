import Head from "next/head";
import styles from "./styles.module.css";
import Layout from "../../components/Layout";
import Grid from "../../components/Grid";
import IntroContent from "../../components/IntroContent";
import LabelCard from "../../components/LabelCard";
import MediaCard from "../../components/MediaCard";
import QuoteCard from "../../components/QuoteCard";
import Image from "next/image";

export default function NES() {
  return (
    <>
      <Head>
        <title>NES</title>
        <meta name="description" content="NES" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className={styles.header}>
          <div className={styles.heroContent}>
            <div>
              <h1 className={styles.title}>NES</h1>

              <p className={styles.description}>1983</p>
            </div>
          </div>
          <div className={styles.heroImg}>
            <Image
              src={"/images/nes/nes_1.jpg"}
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
                title: "NES Game Pak 'Band'",
                description:
                  "The NES introduced two more channels of sound than the Commodore 64, but with more restrictions. Instead of being dynamically swappable, the NES placed restrictions on each channel, keeping them playing the same sound constantly. The underlying philosophy was to create a consistent 'band' that composers could use. There were a total of five voices - two square waves for the melodies, one triangle for the bass, one noise for the percussion, and a sparingly used sampler. Although this is the first system to introduce a true sampler (PCM), it was rarely used due to the memory restrictions.",
              },
            ]}
          />
          <LabelCard
            title="The Legend of Zelda"
            subtitle="Nintendo, 1986"
            description="Tjarring."
          />

          <MediaCard size="half" subtitle1="Figure 1. Hello world" />

          <MediaCard size="twoThirds" subtitle1="Figure 1. Hello world" />

          <QuoteCard
            quote="You had to employ techniques to trick the listener into thinking there was more going on than there actually was."
            author="Neil Baldwin"
          />

          <MediaCard size="half" subtitle1="Figure 1. Hello world" />

          <LabelCard
            title="Super Mario Bros."
            subtitle="Nintendo, 1986"
            description="The first video game with music. Although not during gameplay, this represented the first time music was used to create an atmosphere in a game."
          />

          <LabelCard
            title="Metroid"
            subtitle="Nintendo, 1986"
            description="The first game to have continuous music, with sound effects overlaid during game play. The increase in tempo of the iconic four tones was due to a programming bug, but was kept as it creates a feeling of urgency for the player."
          />
          <MediaCard size="half" subtitle1="Figure 1. Hello world" />

          <QuoteCard
            quote="...you have such limited resources. The way that you have to write, in order to create rich
            textures, you have to write a lot of rhythmic kinds of stuff"
            author="Rob Hubbard"
          />
          <MediaCard size="twoThirds" subtitle1="Figure 1. Hello world" />

          <MediaCard size="full" subtitle1="Figure 1. Hello world" />
        </Grid>
      </Layout>
    </>
  );
}
