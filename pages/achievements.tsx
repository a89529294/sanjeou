import { InferGetStaticPropsType } from "next";
import Head from "next/head";
import React from "react";
import AchievementsList from "../components/achievements/AchievementsList";
import HeroImage from "../components/HeroImage";
import getAchievements from "../utils/data/getAchievements";

function Achievements({
  achievements,
}: InferGetStaticPropsType<typeof getServerSideProps>) {
  return (
    <div>
      <Head>
        <title>工程實績</title>
      </Head>
      <HeroImage text="工程實績" />
      <AchievementsList achievements={achievements} />
    </div>
  );
}

export async function getServerSideProps() {
  const achievements = await getAchievements();

  return {
    props: {
      achievements,
    },
  };
}

export default Achievements;
