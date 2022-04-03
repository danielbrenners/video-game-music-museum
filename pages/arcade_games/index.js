import Head from "next/head";
import styles from "./styles.module.css";
import Layout from "../../components/Layout";
import Grid from "../../components/Grid";
import IntroContent from "../../components/IntroContent";
import LabelCard from "../../components/LabelCard";
import MediaCard from "../../components/MediaCard";
import QuoteCard from "../../components/QuoteCard";
import Image from "next/image";

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

              <p className={styles.description}>1972-1981</p>
            </div>
          </div>
          <div className={styles.heroImg}>
            <Image
              src={"/images/arcade_games/arcade_games_2.jpg"}
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
                title: "The Beginning",
                description:
                  "The arcade era introduced video games to the masses. In order to make them more interactive, amplified speakers were integrated into PCB boards to attract the first generation of video game players. These sounds began as rudimentary 'blips' and eventually into composed songs that played a integral role in the game itself. The advances in arcade game music paved the way for home video game music for decades to come.",
              },
            ]}
          />
          <LabelCard
            title="Pong"
            subtitle="Atari, 1972"
            description="The first video game with sound. The sound, from which the name originates, was generated from a built in ampilifier. The wall sound and the paddle sound create an octave, while the point sound is a disharmonic semitone to be more jarring."
            audioSrc="/audio/arcade_games/pong.mp3"
          />
          <MediaCard
            size="portrait"
            subtitle1="An upright cabinet of Pong."
            src1="/images/arcade_games/pong.jpg"
          />
          <MediaCard
            size="portrait"
            subtitle1="Gun Fight cover art."
            src1="/images/arcade_games/gun-fight.jpg"
          />
          <LabelCard
            title="Gun Fight"
            subtitle="Taito, 1975"
            description="The first video game with music. Although not during gameplay, this represented the first time music was used to create an atmosphere in a game."
            audioSrc="/audio/arcade_games/gun-fight.mp3"
          />
          <LabelCard
            title="Space Invaders"
            subtitle="Taito, 1978"
            description="The first game to have continuous music, with sound effects overlaid during game play. The increase in tempo of the iconic four tones was due to a programming bug, but was kept as it creates a feeling of urgency for the player."
            audioSrc="/audio/arcade_games/space-invaders.mp3"
          />
          <MediaCard
            size="portrait"
            subtitle1="Space Invaders flyer art."
            src1="/images/arcade_games/space-invaders.jpg"
          />
          <MediaCard
            size="twoThirds"
            src1="/images/arcade_games/arcade_games_3.jpg"
          />
          <QuoteCard
            quote="That seemingly pedestrian four-note loop might stir us in the most primitive of ways, but that it stirs us at all is worthy of note."
            author="Andrew Schartmann"
          />
          <MediaCard
            size="portrait"
            subtitle1="Pac-Man flyer art."
            src1="/images/arcade_games/pac-man.jpg"
          />
          <LabelCard
            title="Pac-Man"
            subtitle="Namco, 1980"
            description="First game with cutscenes that included sound."
            audioSrc="/audio/arcade_games/pac-man.mp3"
          />
          <LabelCard
            title="Frogger"
            subtitle="Konami, 1981"
            description="First game to swap out background music in between levels."
            audioSrc="/audio/arcade_games/frogger.mp3"
          />
          <MediaCard
            size="portrait"
            subtitle1="Frogger flyer art."
            src1="/images/arcade_games/frogger.jpg"
          />
          <MediaCard
            size="portrait"
            subtitle1="Vanguard flyer art."
            src1="/images/arcade_games/vanguard.jpg"
          />
          <LabelCard
            title="Vanguard"
            subtitle="TOSE, 1981"
            description="Featuring music from Star Trek, this was the first game to contain licensed music. It also was one of the first instances of digital voice effects."
            audioSrc="/audio/arcade_games/vanguard.mp3"
          />

          {/*
          <MediaCard size="full" subtitle1="Figure 1. Hello world" />
          */}
        </Grid>
      </Layout>
    </>
  );
}
