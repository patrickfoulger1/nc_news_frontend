import { useEffect, useState } from "react";
import ArticleCarousel from "./ArticleCarousel";
import { getArticles } from "../Apis/ncnews";

function ArticleExplorer() {
  const [articles, setArticles] = useState([]);
  const [articlesLoading, setArticlesLoading] = useState(false);

  useEffect(() => {
    setArticlesLoading(true);
    getArticles(99)
      .then((res) => {
        console.log(res);
        setArticles(res.articles);
        setArticlesLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setArticlesLoading(false);
      });
  }, []);
  return (
    <section className="flex h-5/10 w-full" aria-label="Articles">
      <ArticleCarousel articles={articles} />
    </section>
  );
}

export default ArticleExplorer;
