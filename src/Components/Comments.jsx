import { useEffect, useState } from "react";
import { getArticleComments } from "../utils/ncnews-api";
import CommentList from "./CommentList";

function Comments({ article_id }) {
  const [comments, setComments] = useState(null);
  const [commentsLoading, setCommentsLoading] = useState(false);
  useEffect(() => {
    setCommentsLoading(true);
    getArticleComments(article_id)
      .then((res) => {
        setComments(res);
        setCommentsLoading(false);
      })
      .catch((err) => {
        setCommentsLoading(false);
        console.log(err);
      });
  }, [article_id]);

  const elToRender =
    comments && !commentsLoading ? (
      <CommentList comments={comments} />
    ) : (
      <p>comments loading...</p>
    );
  return (
    <>
      <h1 className="mt-3">Comments</h1>
      {elToRender}
    </>
  );
}

export default Comments;
