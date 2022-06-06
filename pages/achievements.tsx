import React from "react";
import AchievementsList from "../components/achievements/AchievementsList";
import HeroImage from "../components/HeroImage";

function Achievements() {
  return (
    <div>
      <HeroImage text="工程實績" />
      <AchievementsList />
    </div>
  );
}

export default Achievements;
