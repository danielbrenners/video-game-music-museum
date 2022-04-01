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
          />

          <MediaCard size="half" subtitle1="Figure 1. Hello world" />

          <MediaCard size="half" subtitle1="Figure 1. Hello world" />

          <LabelCard
            title="Formula One Grand Prix"
            subtitle="MicroProse, 1991"
            description="asdfasdf"
          />

          <LabelCard
            title="Bubble Bobble"
            subtitle="Taito, 1986"
            description="asdfasdf"
          />

          <MediaCard size="half" subtitle1="Figure 1. Hello world" />

          <MediaCard size="full" subtitle1="Figure 1. Hello world" />
        </Grid>
      </Layout>
    </>
  );
}
