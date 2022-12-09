import VideoCarousel from "./VideoCarousel";
import videos from "../data/videos";

export default function VideosByCategory() {
  const categories = ["Football", "Baseball", "BasketBall"];
  return (
    <>
      {categories.map((category) => (
        <VideoCarousel
          title={category}
          videos={videos.filter((video) => video.category === category)}
          key={category}
        />
      ))}
    </>
  );
}
