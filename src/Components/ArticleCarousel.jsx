import { Virtual, Pagination, Mousewheel, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/virtual";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/navigation";

import ArticleCard from "./ArticleCard";

function ArticleCarousel({ articles }) {
  const articleSlides = articles.map((article, index) => (
    <SwiperSlide key={article.article_id} virtualIndex={index}>
      <ArticleCard article={article}></ArticleCard>
    </SwiperSlide>
  ));

  return (
    <Swiper
      style={{
        "--swiper-pagination-color": "#FFBA08",
        "--swiper-pagination-bullet-inactive-color": "#999999",
        "--swiper-pagination-bullet-inactive-opacity": "1",
        "--swiper-pagination-bullet-size": "8px",
        "--swiper-pagination-bullet-horizontal-gap": "6px",
      }}
      modules={[Virtual, Pagination, Mousewheel, Navigation]}
      spaceBetween={0}
      slidesPerView={2}
      direction={"vertical"}
      mousewheel={true}
      navigation={false}
      freeMode={true}
      pagination={{
        dynamicBullets: true,
      }}
      breakpoints={{
        376: {
          slidesPerView: 3,
        },

        640: {
          navigation: { enabled: true },
          slidesPerView: 3,
          direction: "horizontal",
        },
        1028: {
          slidesPerView: 4,
          direction: "horizontal",
          navigation: { enabled: true },
        },
        1920: {
          slidesPerView: 5,
          navigation: { enabled: true },
        },
      }}
      virtual
    >
      {articleSlides}
    </Swiper>
  );
}

export default ArticleCarousel;
