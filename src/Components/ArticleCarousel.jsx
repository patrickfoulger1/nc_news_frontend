import { Virtual, Pagination, Mousewheel } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/virtual";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/navigation";

import ArticleCard from "./ArticleCard";
import { useState } from "react";

function ArticleCarousel({ articles, setSwiper }) {
  const articleSlides = articles.map((article, index) => {
    return (
      <SwiperSlide key={article.article_id} virtualIndex={index}>
        <ArticleCard article={article}></ArticleCard>
      </SwiperSlide>
    );
  });

  return (
    <Swiper
      style={{
        "--swiper-pagination-color": "#FB2C36",
        "--swiper-pagination-bullet-inactive-color": "#999999",
        "--swiper-pagination-bullet-inactive-opacity": "1",
        "--swiper-pagination-bullet-size": "8px",
        "--swiper-pagination-bullet-horizontal-gap": "6px",
      }}
      modules={[Virtual, Pagination, Mousewheel]}
      spaceBetween={0}
      slidesPerView={1}
      direction={"vertical"}
      mousewheel={true}
   
    
      grabCursor={true}
      onSwiper={(swiper) => {
        setSwiper(swiper);
      }}
      breakpoints={{
        376: {
          slidesPerView: 2,
        },

        667: {
          slidesPerView: 2,
          direction: "horizontal",
        },
        1028: {
          slidesPerView: 3,
          direction: "horizontal",
        },
        1920: {
          slidesPerView: 4,
          direction: "horizontal",
        },
        2200: {
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
