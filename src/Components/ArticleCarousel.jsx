import { Virtual, Pagination, Mousewheel } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/virtual";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import ArticleCard from "./ArticleCard";
import "swiper/css/pagination";

function ArticleCarousel({ articles }) {
  const articleSlides = articles.map((article, index) => (
    <SwiperSlide key={article.article_id} virtualIndex={index}>
      <ArticleCard article={article}></ArticleCard>
    </SwiperSlide>
  ));

  return (
    <Swiper
      modules={[Virtual, Pagination, Mousewheel]}
      spaceBetween={0}
      slidesPerView={3}
      direction={"vertical"}
      mousewheel={true}
      freeMode={true}
      pagination={{
        dynamicBullets: true,
      }}
      breakpoints={{
        640: { slidesPerView: 3, direction: "horizontal" },
        1028: {
          slidesPerView: 4,
          direction: "horizontal",
        },
        1920: {
          slidesPerView: 5,
          direction: "horizontal",
        },
      }}
      virtual
    >
      {articleSlides}
    </Swiper>
  );
}

export default ArticleCarousel;
