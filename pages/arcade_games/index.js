import Head from "next/head";
import styles from "./styles.module.css";
import Layout from "../../components/Layout";
import Grid from "../../components/Grid";
import IntroContent from "../../components/IntroContent";
import LabelCard from "../../components/LabelCard";
import ImgCard from "../../components/ImgCard";
import QuoteCard from "../../components/QuoteCard";

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
          <LabelCard
            title="Donkey Kong Country"
            subtitle="Rare (1995)"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida lacus dui id elementum elementum ut mattis facilisis. Risus amet, vestibulum pulvinar congue etiam nisl tempor. 

            Nunc, dolor ultrices habitasse dui lectus tincidunt amet sed. Malesuada sit aliquam egestas aliquet nunc egestas nisl netus condimentum.
             "
          />
          <LabelCard
            title="Donkey Kong Country"
            subtitle="Rare (1995)"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida lacus dui id elementum elementum ut mattis facilisis. Risus amet, vestibulum pulvinar congue etiam nisl tempor. 

            Nunc, dolor ultrices habitasse dui lectus tincidunt amet sed. Malesuada sit aliquam egestas aliquet nunc egestas nisl netus condimentum.
             "
          />
          <ImgCard size="half" subtitle1="Figure 1. Hello world" />
          <ImgCard size="half" subtitle1="Figure 1. Hello world" />
          <ImgCard size="full" subtitle1="Figure 1. Hello world" />
          <ImgCard size="twoThirds" subtitle1="Figure 1. Hello world" />
          <QuoteCard
            quote="hello there my name is Daniel"
            author="Daniel Brenners"
          />
        </Grid>
      </Layout>
    </>
  );
}
