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

export default function CommodoreAmiga() {
  return (
    <>
      <Head>
        <title>Commodore Amiga</title>
        <meta name="description" content="Commodore Amiga" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className={styles.header}>
          <div className={styles.heroContent}>
            <div>
              <h1 className={styles.title}>Commodore Amiga</h1>

              <p className={styles.description}>1985</p>
              <div style={{ display: "flex" }}>
                <SoundCard waveType="sample" />
                <SoundCard waveType="sample" />
                <SoundCard waveType="sample" />
                <SoundCard waveType="sample" />
              </div>
            </div>
          </div>
          <div className={styles.heroImg}>
            <Image
              src={"/images/commodore_amiga/commodore_amiga_2.jpg"}
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
                title: "Sampling",
                description: "asdfasdf",
              },
              {
                title: "Stereo Sound",
                description: "asdfasdf.",
              },
              {
                title: "Mod Trackers",
                description: "asdfasdf.",
              },
            ]}
          />
          <LabelCard
            title="Turrican II: The Final Fight"
            subtitle="Factor Five, 1991"
            description="asdfasdf"
            audioSrc="/audio/commodore_amiga/turrican.mp3"
          />

          <MediaCard
            size="portrait"
            subtitle1="Turrican II: Final Fight cover art."
            src1="/images/commodore_amiga/turrican.jpg"
          />
          <MediaCard
            size="portrait"
            subtitle1="Formula One Grand Prix cover art."
            src1="/images/commodore_amiga/grand-prix.jpg"
          />
          <LabelCard
            title="Formula One Grand Prix"
            subtitle="MicroProse, 1991"
            description="asdfasdf"
            audioSrc="/audio/commodore_amiga/grand-prix.mp3"
          />

          <LabelCard
            title="Bubble Bobble"
            subtitle="Taito, 1986"
            description="asdfasdf"
            audioSrc="/audio/commodore_amiga/bubble-bobble.mp3"
          />

          <MediaCard
            size="portrait"
            subtitle1="Bubble Bobble cover art."
            src1="/images/commodore_amiga/bubble-bobble.jpg"
          />
          {/*<MediaCard size="full" subtitle1="Figure 1. Hello world" />*/}
        </Grid>
      </Layout>
    </>
  );
}
