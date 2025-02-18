import { useEffect, useState } from "react";
import { getArticleById } from "../utils/ncnews-api";
import { useParams } from "react-router";
import Article from "./Article";

function ArticlePage({}) {
  const [article, setArticle] = useState(null);
  const [articleLoading, setArticleLoading] = useState(false);
  const { article_id } = useParams();

  useEffect(() => {
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
      <Article article={article} />
    );

  return <>{elToRender}</>;
}

export default ArticlePage;
