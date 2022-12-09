import VideoCategory from "./VideoCategory";
import videos from "../pages/Videos";

export default function VideoByCategory() {
  const categories = ["Football", "Baseball", "BasketBall"];
  return (
    <>
      {categories.map((category) => (
        <VideoCategory
          title={category}
          videos={videos.filter((video) => video.category === category)}
          key={category}
        />
      ))}
    </>
  );
}
