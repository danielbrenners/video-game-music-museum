import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import Grid from "../components/Grid";
import Card from "../components/Card";

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
          <Card href="arcade_games" title="Arcade Games" description="Descr" />
          <Card href="apple_ii" title="Apple II" description="Descr" />
          <Card href="atari_2600" title="Atari 2600" description="Descr" />
          <Card href="commodore_64" title="Commodore 64" description="Descr" />
          <Card href="nes" title="NES" description="Descr" />
          <Card
            href="commodore_amiga"
            title="Commodore Amiga"
            description="Descr"
          />
          <Card href="sega_genesis" title="Sega Genesis" description="Descr" />
          <Card href="snes" title="SNES" description="Descr" />
          <Card href="nintendo_64" title="Nintendo 64" description="Descr" />
          <Card
            href="playstation_2"
            title="Playstation 2"
            description="Descr"
          />
        </Grid>
      </Layout>
    </>
  );
}
