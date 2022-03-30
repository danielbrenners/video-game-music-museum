import Head from "next/head";
import Image from "next/image";
import styles from "./styles.module.css";
import Layout from "../../components/Layout";
import Grid from "../../components/Grid";
import Card from "../../components/Card";
import IntroContent from "../../components/IntroContent";

export default function ArcadeGames() {
  return (
    <>
      <Head>
        <title>Arcade Games</title>
        <meta name="description" content="Arcade Games" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className={styles.header}>
          <div className={styles.heroContent}>
            <div>
              <h1 className={styles.title}>Arcade Games</h1>

              <p className={styles.description}>1972-1989</p>
            </div>
          </div>
          <div className={styles.heroImg}></div>
        </div>

        <Grid>
          <IntroContent
            content={[
              {
                title: "FM Synthesis",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus nunc, aliquet ipsum tristique bibendum. A malesuada eget in viverra aenean lectus lectus. Velit, tortor mauris nulla vel posuere ullamcorper. Facilisis eu blandit mi, nibh in habitant cras ut leo. Convallis elementum viverra dignissim congue fames fermentum ut tempor varius. Sit vitae id augue vestibulum feugiat vitae hac amet enim. Parturient arcu laoreet a ac aenean. Feugiat vestibulum rhoncus, nunc fringilla. Consequat, est, natoque vitae eros, nunc luctus at scelerisque. Pulvinar tempor eu pellentesque ut. Porttitor arcu adipiscing at sed. Urna facilisi tincidunt ullamcorper id et. Vulputate ultrices iaculis dictum tellus. Nam consequat suspendisse pellentesque pharetra morbi nibh eget fames pellentesque.",
              },
              {
                title: "Five Voices",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus nunc, aliquet ipsum tristique bibendum. A malesuada eget in viverra aenean lectus lectus. Velit, tortor mauris nulla vel posuere ullamcorper. Facilisis eu blandit mi, nibh in habitant cras ut leo. Convallis elementum viverra dignissim congue fames fermentum ut tempor varius. Sit vitae id augue vestibulum feugiat vitae hac amet enim. Parturient arcu laoreet a ac aenean. Feugiat vestibulum rhoncus, nunc fringilla. Consequat, est, natoque vitae eros, nunc luctus at scelerisque. Pulvinar tempor eu pellentesque ut. Porttitor arcu adipiscing at sed. Urna facilisi tincidunt ullamcorper id et. Vulputate ultrices iaculis dictum tellus. Nam consequat suspendisse pellentesque pharetra morbi nibh eget fames pellentesque.",
              },
            ]}
          />
          <Card href="arcade_games" title="Arcade Games" description="Descr" />
          <Card href="apple_ii" title="Apple II" description="Descr" />
          <Card href="atari_2600" title="Atari 2600" description="Descr" />
          <Card href="commodore_64" title="Commodore 64" description="Descr" />
        </Grid>
      </Layout>
    </>
  );
}
