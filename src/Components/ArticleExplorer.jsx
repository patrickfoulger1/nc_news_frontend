import { useEffect, useState } from "react";
import ArticleCarousel from "./ArticleCarousel";
import { getArticles } from "../utils/ncnews-api";
import { useSearchParams } from "react-router";

function ArticleExplorer() {
  const [articles, setArticles] = useState([]);
  const [articlesLoading, setArticlesLoading] = useState(false);
  const [swiper, setSwiper] = useState(null);
  const [displayIndex, setDisplayIndex] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const display = searchParams.get("display");

  useEffect(() => {
    setArticlesLoading(true);
    getArticles(99)
      .then((res) => {
        setArticles(res.articles);
        setArticlesLoading(false);

        if (display) {
          res.articles.forEach(({ article_id }, index) => {
            if (article_id === +display) {
              if (index > 1) {
                setDisplayIndex(index);
              }
            }
          });
        }
      })
      .catch((err) => {
        console.log(err);
        setArticlesLoading(false);
      });
  }, []);

  useEffect(() => {
    if (swiper && displayIndex) {
      swiper.slideTo(displayIndex);
    }
  }, [swiper, displayIndex]);

  const loading = articlesLoading ? <p>loading...</p> : null;

  return (
    <>
      {loading}
      <section className="flex h-full w-full" aria-label="Articles">
        <ArticleCarousel articles={articles} setSwiper={setSwiper} />
      </section>
    </>
  );
}

export default ArticleExplorer;
