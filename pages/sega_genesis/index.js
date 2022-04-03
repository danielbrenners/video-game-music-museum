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
              <div style={{ display: "flex" }}>
                <SoundCard waveType="fm" />
              </div>
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
                description:
                  "Owes it's popularity to the DX7 keyboard, which has become synonymous with 1980's music. Frequency modulation can approximate a much wider array of instruments and sound waves by altering a wave's frequency in accordance with another wave, known as the modulator.",
              },
            ]}
          />
          <LabelCard
            title="Ecco: The Tides of Time"
            subtitle="Sega, 1994"
            description="Creator Annunziata worked with the music team on the soundtrack, playing them songs by Pink Floyd to illustrate the feeling he was aiming for."
            audioSrc="/audio/sega_genesis/ecco.mp3"
          />

          <MediaCard
            size="portrait"
            subtitle1="Ecco: The Tides of Time cover art."
            src1="/images/sega_genesis/ecco.jpg"
          />
          <MediaCard
            size="portrait"
            subtitle1="Sonic the Hedgehog cover art."
            src1="/images/sega_genesis/sonic.jpg"
          />
          <LabelCard
            title="Sonic the Hedgehog"
            subtitle="Sega, 1991"
            description="Composer Masato Nakamura (known for being the bassist and songwriter of J-Pop band Dreams Come True) treated Sonic as a film and designed the music around the atmosphere that he felt from the images of the stages"
            audioSrc="/audio/sega_genesis/sonic.mp3"
          />

          {/*<MediaCard size="full" subtitle1="Figure 1. Hello world" />*/}
        </Grid>
      </Layout>
    </>
  );
}
