import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import Grid from "../components/Grid";
import ObjectCard from "../components/ObjectCard";

export default function Home() {
  return (
    <>
      <Head>
        <title>Video Game Music Museum</title>
        <meta name="description" content="Video Game Music Museum" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <h1 className={styles.title}>Video Game Music Museum</h1>

        <p className={styles.description}>
          An exploration of creativity and constraints.
        </p>

        <Grid>
          <ObjectCard
            href="arcade_games"
            src="/images/arcade_games/arcade_games_1.jpg"
            imgWidth="30%"
          />

          <ObjectCard
            href="apple_ii"
            src="/images/apple_ii/apple_ii_1.jpg"
            imgWidth="30%"
          />

          <ObjectCard
            href="atari_2600"
            src="/images/atari_2600/atari_2600_2.jpg"
            imgWidth="30%"
          />

          <ObjectCard
            href="commodore_64"
            src="/images/commodore_64/commodore_64_2.jpg"
            imgWidth="30%"
          />
          <ObjectCard href="nes" src="/images/nes/nes_2.jpg" imgWidth="30%" />
          <ObjectCard
            href="commodore_amiga"
            src="/images/commodore_amiga/commodore_amiga_1.jpg"
            imgWidth="30%"
          />
          <ObjectCard
            href="sega_genesis"
            src="/images/sega_genesis/sega_genesis_2.jpg"
            imgWidth="30%"
          />
          <ObjectCard
            href="snes"
            src="/images/snes/snes_1.jpg"
            imgWidth="30%"
          />
          {/*
          <ObjectCard
            href="nintendo_64"
            title="Nintendo 64"
            description="Descr"
          />
          <ObjectCard
            href="playstation_2"
            title="Playstation 2"
            description="Descr"
          />
  */}
        </Grid>
      </Layout>
    </>
  );
}
