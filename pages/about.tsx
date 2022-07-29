import { InferGetStaticPropsType } from "next";
import Head from "next/head";
import React, { useEffect } from "react";
import Certifications from "../components/about/Certifications";
import Hero from "../components/about/Hero";
import Milestones from "../components/about/Milestones";
import HeroImage from "../components/HeroImage";
import { CompanyInfo } from "../data/types";
import getCompanyInfo from "../utils/data/getCompanyInfo";

function About({
  title,
  content,
  videoURL,
  certs,
  milestones,
}: InferGetStaticPropsType<typeof getServerSideProps>) {
  console.log(Date.now() + ": " + title);
  useEffect(() => {
    console.log("In About Function: " + Date.now());
  }, []);
  return (
    <div>
      <Head>
        <title>公司簡介</title>
      </Head>
      <HeroImage text="公司簡介" />
      <div className="px-32 pt-16 pb-24 sm:px-7 sm:pt-4 sm:pb-8">
        <Hero title={title} content={content} videoURL={videoURL} />
        <Certifications certs={certs} />
        <Milestones milestones={milestones} />
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const { title, content, videoURL, certs, milestones }: CompanyInfo =
    await getCompanyInfo();
  try {
    // console.log(window);
  } catch (e) {
    console.log(Date.now());
    console.log(e);
  }

  return {
    props: {
      title,
      content,
      videoURL,
      certs,
      milestones,
    },
  };
}

export default About;
