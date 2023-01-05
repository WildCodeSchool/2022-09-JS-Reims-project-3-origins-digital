import { useContext } from "react";
import VideoCarousel from "./VideoCarousel";
import CurrentVideoContext from "../contexts/currentVideo";
import CurrentCategoryContext from "../contexts/currentCategory";

export default function VideosByCategory() {
  const videos = useContext(CurrentVideoContext);
  const category = useContext(CurrentCategoryContext);
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
