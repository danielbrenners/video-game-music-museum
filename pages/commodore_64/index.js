import Head from "next/head";
import styles from "./styles.module.css";
import Layout from "../../components/Layout";
import Grid from "../../components/Grid";
import IntroContent from "../../components/IntroContent";
import LabelCard from "../../components/LabelCard";
import MediaCard from "../../components/MediaCard";
import QuoteCard from "../../components/QuoteCard";
import Image from "next/image";

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
            description="asdfasdf"
          />

          <MediaCard size="half" subtitle1="Figure 1. Hello world" />

          <MediaCard size="half" subtitle1="Figure 1. Hello world" />

          <LabelCard
            title="Commando"
            subtitle="Data East, 1985"
            description="asdfasdf"
          />

          <LabelCard
            title="Myth"
            subtitle="System 3, 1989"
            description="asdfasdf"
          />

          <MediaCard size="half" subtitle1="Figure 1. Hello world" />

          <MediaCard size="full" subtitle1="Figure 1. Hello world" />
        </Grid>
      </Layout>
    </>
  );
}
