import React, { useReducer, useState } from "react";
import SectionTitle from "../SectionTitle";
import Map from "../Map";
import { CircleArrowLeft, CircleArrowRight } from "../Icons/CircleArrows";

const mapPositionClass = {
  0: "translate-x-0",
  1: "-translate-x-1/4",
  2: "-translate-x-2/4",
  3: "-translate-x-3/4",
  4: "-translate-x-full",
};
type ValidPositions = keyof typeof mapPositionClass;
const validPositions = [0, 1, 2, 3, 4];

const isValidPosition = (num: number): num is ValidPositions => {
  return validPositions.findIndex((v) => v === num) !== -1;
};

function reducer(state: number, action: "inc" | "dec") {
  let result;
  if (action === "inc") result = ++state;
  else if (action === "dec") result = --state;
  else throw new Error("impossible value");
  if (result < 0) result = 0;
  else if (result > 3) result = 3;
  if (isValidPosition(result)) return result;
  else return 0;
}

function Locations() {
  //map is about 1200px wide, viewport is about 300px wide, position is in [0,1,2,3,4]
  const [mapPosition, dispatch] = useReducer(reducer, 0);

  return (
    <div className="relative px-32 pb-28 sm:px-7 sm:pb-14">
      <SectionTitle
        primary="合作夥伴"
        secondary="Cooperation"
        withDivider
        withDecoration
      />
      <div className="relative px-11 sm:px-0">
        <Map
          className={`mt-4 transition-transform duration-300 ${mapPositionClass[mapPosition]}`}
        />
        <div className="hidden gap-6 mx-auto sm:flex w-fit">
          <CircleArrowLeft onClick={() => dispatch("inc")} />
          <CircleArrowRight onClick={() => dispatch("dec")} />
        </div>
      </div>
    </div>
  );
}

export default Locations;
