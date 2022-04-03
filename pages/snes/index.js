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
              <div style={{ display: "flex" }}>
                <SoundCard waveType="sample" />
                <SoundCard waveType="sample" />
                <SoundCard waveType="sample" />
                <SoundCard waveType="sample" />
                <SoundCard waveType="sample" />
                <SoundCard waveType="sample" />
                <SoundCard waveType="sample" />
                <SoundCard waveType="sample" />
              </div>
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
                  "Another sample-based system (similar to the Amiga), but with more channels. Nintendo shipped developer kits with sampler libraries so composers could create music quickly. The system only had 64 kilobytes of audio RAM though, so samples needed to be relatively short.",
              },
            ]}
          />
          <LabelCard
            title="Donkey Kong Country 2"
            subtitle="Rare, 1995"
            description="Composer David Wise was inspired by the Korg Waveform, and sampled from this synthesizer often, creating the unique sound of the Donkey Kong series."
            audioSrc="/audio/snes/donkey-kong.mp3"
          />
          <MediaCard
            size="portrait"
            subtitle1="Donkey Kong Country 2 cover art."
            src1="/images/snes/donkey-kong.jpg"
          />
          <MediaCard
            size="portrait"
            subtitle1="Chrono Trigger cover art."
            src1="/images/snes/chrono-trigger.jpg"
          />
          <LabelCard
            title="Chrono Trigger"
            subtitle="Square, 1995"
            description="With 8 channels of samples, Chrono Trigger shows how composers could create a complex, orechestrated sound by sampling many instruments at once."
            audioSrc="/audio/snes/chrono-trigger.mp3"
          />
          <MediaCard size="twoThirds" src1="/images/snes/snes_3.jpg" />
          <QuoteCard
            quote="The ultimate goal for me in making music, or at least one of the main goals for me, is to create memorable melodies. That goal is there regardless of the tools we have."
            author="Koji Kondo"
          />
          <LabelCard
            title="Mega Man X"
            subtitle="Capcom, 1993"
            description="Mega Man X represented a reboot of long-standing franchise known for its fast, upbeat music. But with a more serious, mature take on this legacy brand a new sound came with it - one that illustrated the SNES’ amazing audio capabilities. "
            audioSrc="/audio/snes/mega-man-x.mp3"
          />
          <MediaCard
            size="portrait"
            subtitle1="Mega Man X cover art."
            src1="/images/snes/mega-man-x.jpg"
          />
          {/*<MediaCard size="full" subtitle1="Figure 1. Hello world" />*/}
        </Grid>
      </Layout>
    </>
  );
}
