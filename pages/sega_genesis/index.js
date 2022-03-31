import Head from "next/head";
import styles from "./styles.module.css";
import Layout from "../../components/Layout";
import Grid from "../../components/Grid";
import IntroContent from "../../components/IntroContent";
import LabelCard from "../../components/LabelCard";
import MediaCard from "../../components/MediaCard";
import QuoteCard from "../../components/QuoteCard";
import Image from "next/image";

export default function SegaGenesis() {
  return (
    <>
      <Head>
        <title>Sega Genesis</title>
        <meta name="description" content="Sega Genesis" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className={styles.header}>
          <div className={styles.heroContent}>
            <div>
              <h1 className={styles.title}>Sega Genesis</h1>

              <p className={styles.description}>1989</p>
            </div>
          </div>
          <div className={styles.heroImg}>
            <Image
              src={"/images/sega_genesis/sega_genesis_1.jpg"}
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
                title: "FM Synthesis",
                description: "asdfasdf",
              },
            ]}
          />
          <LabelCard
            title="Ecco: The Tides of Time"
            subtitle="Sega, 1994"
            description="asdfasdf"
          />

          <MediaCard size="half" subtitle1="Figure 1. Hello world" />

          <MediaCard size="half" subtitle1="Figure 1. Hello world" />

          <LabelCard
            title="Sonic the Hedgehog"
            subtitle="Sega, 1991"
            description="asdfasdf"
          />

          <MediaCard size="full" subtitle1="Figure 1. Hello world" />
        </Grid>
      </Layout>
    </>
  );
}
