import { Virtual, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/virtual";
import "swiper/css/pagination";
import ArticleCard from "./ArticleCard";

function ArticleCarousel({ articles }) {
  const articleSlides = articles.map((article, index) => (
    <SwiperSlide key={article.article_id} virtualIndex={index}>
      <ArticleCard article={article}></ArticleCard>
    </SwiperSlide>
  ));

  return (
    <Swiper
      modules={[Virtual, Pagination]}
      spaceBetween={0}
      slidesPerView={1}
      pagination={{
        dynamicBullets: true,
      }}
      virtual
    >
      {articleSlides}
    </Swiper>
  );
}

export default ArticleCarousel;
