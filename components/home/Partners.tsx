import Image from "next/image";
import React, { useState } from "react";
import SectionTitle from "../SectionTitle";
import Marquee from "../Marquee";
import MarqueeImage from "../MarqueeImage";

import { PartnersType } from "../../data/types";

function Partners({ partners }: { partners: PartnersType }) {
  const partnerKeys = Object.keys(partners);

  return (
    <div className="relative px-32 pb-6 sm:px-7 sm:pb-1">
      <SectionTitle
        primary="合作廠商"
        secondary="Partners"
        withDivider
        className="pb-6 sm:pb-1"
        withDecoration
      />
      <div className="grid gap-4 sm:my-3">
        {/* TODO images are way too big on mobile */}
        {partnerKeys.map((p, j) => (
          <Marquee key={p} scrollDir={j % 2 ? "left" : "right"}>
            {partners[p].map((imgStr, i) => (
              <MarqueeImage src={imgStr} key={i} height="h-16 " />
            ))}
          </Marquee>
        ))}
        {/* <Marquee>
          {row1.map((imgStr, i) => (
            <MarqueeImage src={imgStr} key={i} height="h-16" />
          ))}
        </Marquee>
        <Marquee scrollDir="right">
          {row2.map((imgStr, i) => (
            <MarqueeImage src={imgStr} key={i} height="h-16" />
          ))}
        </Marquee>
        <Marquee>
          {row3.map((imgStr, i) => (
            <MarqueeImage src={imgStr} key={i} height="h-16" />
          ))}
        </Marquee>
        <Marquee scrollDir="right">
          {row4.map((imgStr, i) => (
            <MarqueeImage src={imgStr} key={i} height="h-16" />
          ))}
        </Marquee> */}
      </div>
    </div>
  );
}

export default Partners;
