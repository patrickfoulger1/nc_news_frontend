import { useContext, useEffect, useState } from "react";
import { getArticleById } from "../utils/ncnews-api";
import { useParams } from "react-router";
import Article from "./Article";
import { NavSettings } from "../contexts/NavSettings";

function ArticlePage({}) {
  const [article, setArticle] = useState(null);
  const [articleLoading, setArticleLoading] = useState(false);
  const { article_id } = useParams();
  const { setNavSettings } = useContext(NavSettings);

  useEffect(() => {
    setNavSettings((settings) => {
      const newSettings = { ...settings };
      newSettings.currentPage = "Article";
      return newSettings;
    });

    setArticleLoading(true);
    getArticleById(article_id)
      .then((res) => {
        setArticle(res);

        setArticleLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setArticleLoading(false);
      });
  }, [article_id]);

  const elToRender =
    articleLoading || !article ? (
      <p>loading...</p>
    ) : (
      <>
        <Article article={article} />
      </>
    );

  return (
    <>
      <section>{elToRender}</section>
    </>
  );
}

export default ArticlePage;
