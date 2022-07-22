import { baseURL } from "../urls";

async function getCompanyInfo() {
  const r = await fetch(
    `${baseURL}/api/introduction?populate[Certification][populate]=*&populate=Company_Timeline`
  );
  const data = await r.json();

  const attr = data.data.attributes;
  const title = attr.title;
  const content = attr.content;
  const videoURL = attr.videoURL;
  const certs = attr.Certification.map((c: any) => ({
    id: c.id,
    name: c.name,
    imgURL: c.image.data[0].attributes.url,
  }));
  const sortedTL = attr.Company_Timeline.sort(
    (a: any, b: any) => a.year - b.year
  );
  const combinedSortedTL = [
    { year: sortedTL[0].year, texts: [sortedTL[0].content] },
  ];
  for (let c = 1; c < sortedTL.length; c++) {
    if (sortedTL[c - 1].year === sortedTL[c].year) {
      const prevEle = combinedSortedTL.find((v) => v.year === sortedTL[c].year);
      prevEle!.texts.push(sortedTL[c].content);
    } else {
      combinedSortedTL.push({
        year: sortedTL[c].year,
        texts: [sortedTL[c].content],
      });
    }
  }
  return { title, content, videoURL, certs, milestones: combinedSortedTL };
}

export default getCompanyInfo;
