import { useContext, useEffect, useState } from "react";
import ArticleCarousel from "./ArticleCarousel";
import { getArticles } from "../utils/ncnews-api";
import { useSearchParams } from "react-router";
import { NavSettings } from "../contexts/NavSettings";

function ArticleExplorer() {
  const [articles, setArticles] = useState([]);
  const [articlesLoading, setArticlesLoading] = useState(false);
  const [swiper, setSwiper] = useState(null);
  const [displayIndex, setDisplayIndex] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const { setNavSettings } = useContext(NavSettings);
  const display = searchParams.get("display");
  const topic = searchParams.get("topic");

  useEffect(() => {
    setNavSettings((settings) => {
      const newSettings = { ...settings };
      newSettings.currentPage = "Home";
      return newSettings;
    });

    setArticlesLoading(true);
    getArticles(99, undefined, topic)
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
  }, [topic]);

  useEffect(() => {
    if (swiper && displayIndex) {
      swiper.slideTo(displayIndex);
    }
  }, [swiper, displayIndex]);

  const loading = articlesLoading ? <p>loading...</p> : null;

  return (
    <>
      {loading}
      <div className="absolute flex items-center justify-center fixed w-1/2 h-1/13  z-40 top-1/2 md:top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2  md:-translate-y-0">
        <p className="text-white font-black text-5xl [text-shadow:_0px_0px_5px_rgba(0,0,0,1)]">
          #{topic ? topic : "All"}
        </p>
      </div>
      <section className="flex h-full w-full" aria-label="Articles">
        <ArticleCarousel articles={articles} setSwiper={setSwiper} />
      </section>
    </>
  );
}

export default ArticleExplorer;
