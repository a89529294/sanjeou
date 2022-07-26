import {
  allIcons,
  allWhiteIcons,
  ProductCategory,
  Video,
} from "../../data/types";
import { baseURL } from "../../utils/urls";

async function getVideos() {
  const videos: Video[] = [];
  const res = await fetch(`${baseURL}/api/videos`);
  const videosData = await res.json();
  videosData.data.forEach((v: any) => {
    videos.push({
      id: v.id,
      name: v.attributes.title,
      URL: v.attributes.link,
    });
  });

  return videos;
}

export default getVideos;
