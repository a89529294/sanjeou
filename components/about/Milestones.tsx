import React from "react";
import { CompanyInfoType } from "../../data/types";
import SectionTitle from "../SectionTitle";
import TopCircle from "../TopCircle";

// const leftColumnItems = [
//   {
//     year: 1982,
//     texts: ["創立三久捲門實業有限公司。", "國內首先開發鏈條式電動單軌大門。"],
//   },
//   { year: 1984, texts: ["國內首先開發鏈條式電動單軌大門。"] },
//   { year: 1988, texts: ["新廠落成，並由台中市遷移至現址。"] },
//   { year: 1991, texts: ["與日本OMATA捲門株式會社簽定技術合作協議。"] },
//   { year: 1993, texts: ["SJ-G01大型玻璃捲門開發完成。"] },
//   { year: 1997, texts: ["防火捲門通過美國U.L防火時效3小時之認證。"] },
//   {
//     year: 1999,
//     texts: ["電動側捲防火捲門開發完成，並承包中正機場一期航站側捲防火捲門。"],
//   },
//   {
//     year: 2002,
//     texts: ["完成台北捷運市政府站以東，納莉風災改善工程之防水閘門更新工程。"],
//   },
//   {
//     year: 2006,
//     texts: [
//       "具承建水頭壓力12M，閘門規格尺寸6M × 3.2M大型防水閘門經驗(台北捷運復興站)。",
//     ],
//   },
//   {
//     year: 2008,
//     texts: ["完成基隆河員山子分洪工程之進水口閘門工程。"],
//   },
//   {
//     year: 2010,
//     texts: ["陸續完成台北捷運新莊線.蘆洲線防水閘門.防火捲門工程。"],
//   },
//   {
//     year: 2014,
//     texts: ["三久新廠於霧峰新址動工擴建，占地4300平方米。"],
//   },
// ];

// const rightColumnItems = [
//   { year: 1983, texts: ["公司名稱變更為三久建材工業股份有限公司。"] },
//   { year: 1987, texts: ["於大里現址購地1200坪廠房擴建。"] },
//   {
//     year: 1990,
//     texts: ["由日本引進門片成型技術，四套全自動成型機加入生產行列。"],
//   },
//   { year: 1992, texts: ["電動橫拉門及SJ-G02玻璃捲門開發完成。"] },
//   { year: 1994, texts: ["開發完成螺桿式電動防水閘門。"] },
//   {
//     year: 1998,
//     texts: [
//       "公司資本額變更為2800萬元整。",
//       "公司領先同業通過ISO-9002國際品質認證。",
//     ],
//   },
//   {
//     year: 2000,
//     texts: ["電動防火捲門通過CNS 11227防火時效2小時認證。"],
//   },
//   {
//     year: 2005,
//     texts: [
//       "完成高鐵青埔.烏日.燕巢.左營站防火捲門.防水閘門工程。",
//       "電動防火捲門通過CNS 14803防火時效3小時認證。",
//     ],
//   },
//   {
//     year: 2007,
//     texts: ["擺臂式電動水閘門及橫移式電動水閘門陸續開發完成。"],
//   },
//   {
//     year: 2009,
//     texts: [
//       "陸續開發完成多種防水閘門、水密門、隔艙門之設計及製造(按裝於台北捷運各站體內)。",
//       "完成高雄捷運R線及O線，共26個站體電動捲門、防火捲門及防水閘門等工程(總共38個站體)。",
//     ],
//   },
//   {
//     year: 2012,
//     texts: [
//       "申請通過一般捲門附彈射門之防火認證60B。",
//       "開發完成鋁合金防水捲門之產品,並申請多國專利。",
//       "完成台鐵(松山火車站)及(南港火車站)兩大站區新建工程之防水閘門以及各式隔艙門、水密門等。",
//     ],
//   },
//   {
//     year: 2016,
//     texts: [
//       "與外商Le Fast 及Better Door公司簽訂技術合作備忘錄，正式跨足至機棚大門及各種特種門產業。",
//       "三久生產之電動防洪閘門及手動防洪閘門通過TUV測試PAS1188標準。",
//       "三久新廠落成，引進新式成型機台、精密剪床及折床等新穎設備。",
//     ],
//   },
// ];

const TimelineItem = ({
  year,
  texts,
  index,
}: {
  year: number;
  texts: string[];
  index: number;
}) => {
  return year === -98 ? (
    <div className="h-0 basis-1/2"></div>
  ) : year === -99 ? (
    <div className="h-60 basis-1/2 sm:h-72"></div>
  ) : year === -100 ? (
    <div className="h-20 basis-1/2"></div>
  ) : (
    <div
      className={`basis-1/2 flex flex-col justify-center pt-10 ${
        index % 2 ? "items-start" : "items-end"
      }`}
      style={{
        transform: index % 2 ? "translateY(50%)" : "none",
      }}>
      <div
        className={`relative pb-2 text-5xl font-thin border-b border-gray-300 border-solid text-primary/70 after:content-[''] after:w-3 after:aspect-square after:bg-gray-300 after:rounded-full after:block after:absolute ${
          index % 2
            ? "pl-9 after:left-0 after:bottom-0 after:-translate-x-1/2 after:translate-y-1/2"
            : "pr-10 after:right-0 after:bottom-0 after:translate-x-1/2 after:translate-y-1/2"
        } sm:text-2xl`}>
        {year}
      </div>
      {texts.map((text, i) => (
        <div
          className={`pl-2 mt-2 text-lg leading-none border-l border-solid border-primary-red ${
            index % 2 ? "ml-10" : "pr-10"
          } sm:text-sm`}
          key={i}>
          {text}
        </div>
      ))}
    </div>
  );
};

function Milestones({
  milestones,
}: {
  milestones: CompanyInfoType["milestones"];
}) {
  const leftColumnItems: CompanyInfoType["milestones"] = [];
  const rightColumnItems: CompanyInfoType["milestones"] = [];

  for (let i = 0; i < milestones.length; i++) {
    if (i % 2) rightColumnItems.push(milestones[i]);
    else leftColumnItems.push(milestones[i]);
  }

  const l = Math.max(leftColumnItems.length, rightColumnItems.length);
  const items: CompanyInfoType["milestones"] = [];
  new Array(l).fill(0).forEach((item, i) => {
    leftColumnItems[i] && items.push(leftColumnItems[i]);
    rightColumnItems[i] && items.push(rightColumnItems[i]);
  });
  const lengthIsEven = items.length % 2 === 0;
  lengthIsEven
    ? items.push({ year: -99, texts: [] })
    : items.push({ year: -98, texts: [] }, { year: -100, texts: [] });

  return (
    <div className="relative grid gap-14 isolate">
      <SectionTitle
        primary="企業沿革"
        withDivider
        withDecoration
        id="about-milestones"
        size="about-title"
      />
      <div className="relative flex flex-wrap ">
        {items.map((item, i) => (
          <TimelineItem key={i} year={item.year} texts={item.texts} index={i} />
        ))}
        <div className="absolute h-full left-1/2 -z-10 outline outline-1 outline-primary-red before:content-[''] before:w-5 before:aspect-square before:rounded-full before:border before:border-primary-red before:border-solid before:absolute before:right-0 before:top-0 before:translate-x-1/2 before:-translate-y-1/2 before:bg-white after:content-[''] after:block after:w-6 after:border-b-2 after:border-primary-red after:aspect-square after:absolute after:-bottom-[2px] after:-translate-y-1/2 after:skew-y-[-45deg]" />
      </div>
      <TopCircle to="/about" className="right-0 top-28" />
    </div>
  );
}

export default Milestones;
