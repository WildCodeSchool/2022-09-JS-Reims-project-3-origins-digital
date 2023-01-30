import { useContext } from "react";
import VideoCarousel from "./VideoCarousel";
import VideoContext from "../contexts/ContextVideos";
import CategoryContext from "../contexts/ContextCategory";

export default function VideosByCategory() {
  const { videos } = useContext(VideoContext);
  const category = useContext(CategoryContext);
  return (
    <>
      {category.map((categories) => (
        <VideoCarousel
          title={categories.category_name}
          videos={videos.filter((video) => video.category_id === categories.id)}
          key={categories.category_name}
          category={categories}
        />
      ))}
    </>
  );
}
