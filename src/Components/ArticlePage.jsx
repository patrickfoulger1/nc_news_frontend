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
  const [error, setError] = useState(null);
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
        if (err.response.status === 404) {
          setError("404: This article doesn't exist");
        } else if (err.response.status === 400) {
          setError("400: That's not a valid article id ");
        } else {
          setError("500: There's a problem with our server 0_0");
        }
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
       {error ? <p>{error}</p> : <section>{elToRender}</section>}
    </>
  );
}

export default ArticlePage;
