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

export default function Commodore64() {
  return (
    <>
      <Head>
        <title>Commodore 64</title>
        <meta name="description" content="Commodore 64" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className={styles.header}>
          <div className={styles.heroContent}>
            <div>
              <h1 className={styles.title}>Commodore 64</h1>

              <p className={styles.description}>1982</p>
              <div style={{ display: "flex" }}>
                <SoundCard waveType="square" />
                <SoundCard waveType="triangle" />
                <SoundCard waveType="sawtooth" />
                <SoundCard waveType="noise" />
              </div>
            </div>
          </div>
          <div className={styles.heroImg}>
            <Image
              src={"/images/commodore_64/commodore_64_1.jpg"}
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
                title: "MOS Technology 6581",
                description:
                  "The MOS Technology 6581/8580 SID (Sound Interface Device) was the first dedicated sound chip to be included in a home video game system. Developed by Robert Yannes, it provided essentially a full (albeit basic) synthesizer to the Commodore 64. It had three voices, and each voice could be a sawtooth, square, triangle, or noise channel. Each channel was also dynamically assignable, being able to swap signals mid-song. This technique was used in later games to give the impression of more than just three channels. It contained analog filtering capabilities, and was characterized by its 'crunchy' sound.",
              },
            ]}
          />
          <LabelCard
            title="Paperboy"
            subtitle="Midway Games, 1985"
            description="Although the Commodore only had three active voices, Paperboy shows how developers could dynamically assign instruments during the song to create the illusion of more instruments."
            audioSrc="/audio/commodore_64/paperboy.mp3"
          />

          <MediaCard
            size="portrait"
            subtitle1="Paperboy cover art."
            src1="/images/commodore_64/paperboy.jpg"
          />
          <MediaCard
            size="portrait"
            subtitle1="Commando cover art."
            src1="/images/commodore_64/commando.jpg"
          />
          <LabelCard
            title="Commando"
            subtitle="Data East, 1985"
            description="An early Commodore release, Commando took the theme from the original game and updated it with the new hardware."
            audioSrc="/audio/commodore_64/commando.mp3"
          />

          <LabelCard
            title="Myth"
            subtitle="System 3, 1989"
            description="A later release, Myth is an example that uses filtering techniques that were learned as developers became more familiar with the new hardware capabilities.'"
            audioSrc="/audio/commodore_64/myth.mp3"
          />

          <MediaCard
            size="portrait"
            subtitle1="Myth cover art."
            src1="/images/commodore_64/myth.jpg"
          />
          {/*<MediaCard size="full" subtitle1="Figure 1. Hello world" />*/}
        </Grid>
      </Layout>
    </>
  );
}
