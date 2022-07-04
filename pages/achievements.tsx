import Head from "next/head";
import React from "react";
import AchievementsList from "../components/achievements/AchievementsList";
import HeroImage from "../components/HeroImage";

function Achievements() {
  return (
    <div>
      <Head>
        <title>工程實績</title>
      </Head>
      <HeroImage text="工程實績" />
      <AchievementsList />
    </div>
  );
}

export default Achievements;
