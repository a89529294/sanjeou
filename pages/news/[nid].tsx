import { useRouter } from "next/router";
import React from "react";
import HeroImage from "../../components/HeroImage";
import NewsArticle from "../../components/news/NewsArticle";

function NewsInnerPage() {
  const router = useRouter();
  const { nid } = router.query;
  console.log(nid);

  return (
    <div>
      <HeroImage text="動態資訊" />
      <NewsArticle />
    </div>
  );
}

export default NewsInnerPage;
