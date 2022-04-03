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
              <div style={{ display: "flex" }}>
                <SoundCard waveType="square" />
                <SoundCard waveType="square" />
                <SoundCard waveType="triangle" />
                <SoundCard waveType="noise" />
                <SoundCard waveType="sample" />
              </div>
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
            description="Composer Koji Kondo had planned to use Maurice Ravel's Boléro as the title theme, but was forced to change it late in the development cycle after learning that the copyright for the orchestral piece had not yet expired. As a result, Kondo wrote a new arrangement of the overworld theme within one day, which has become an iconic motif echoing throughout continued entries of the series.."
            audioSrc="/audio/nes/zelda.mp3"
          />

          <MediaCard
            size="portrait"
            subtitle1="Zelda cover art."
            src1="/images/nes/zelda.jpg"
          />
          <MediaCard size="twoThirds" src1="/images/nes/nes_4.jpg" />
          <QuoteCard
            quote="You had to employ techniques to trick the listener into thinking there was more going on than there actually was."
            author="Neil Baldwin"
          />

          <MediaCard
            size="portrait"
            subtitle1="Super Mario Bros. cover art."
            src1="/images/nes/mario.jpg"
          />
          <LabelCard
            title="Super Mario Bros."
            subtitle="Nintendo, 1986"
            description="One of the most famous video game themes of all time, composer Koji Kondo commented that the theme reflects the action-oriented gameplay of the series."
            audioSrc="/audio/nes/mario.mp3"
          />

          <QuoteCard
            quote="...you have such limited resources. The way that you have to write, in order to create rich
            textures, you have to write a lot of rhythmic kinds of stuff"
            author="Rob Hubbard"
          />
          <MediaCard size="twoThirds" src1="/images/nes/nes_3.jpg" />

          <LabelCard
            title="Metroid"
            subtitle="Nintendo, 1986"
            description="Composed by Hirokazu Tanaka, the theme from Metroid reflects the ability of the sound capabilities to create a dreadful atmosphere that matches the game's environment."
            audioSrc="/audio/nes/metroid.mp3"
          />
          <MediaCard
            size="portrait"
            subtitle1="Metroid cover art."
            src1="/images/nes/metroid.jpg"
          />

          {/*<MediaCard size="full" subtitle1="Figure 1. Hello world" />*/}
        </Grid>
      </Layout>
    </>
  );
}
