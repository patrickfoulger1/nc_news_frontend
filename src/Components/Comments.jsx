import { useEffect, useState } from "react";
import { getArticleComments } from "../utils/ncnews-api";
import CommentList from "./CommentList";
import AddCommentForm from "./AddCommentForm";

function Comments({ article_id, setArticleCommentCount, articleCommentCount }) {
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
      <h1 className="m-3">Comments</h1>
      <AddCommentForm
        article_id={article_id}
        comments={comments}
        setComments={setComments}
      />
      {elToRender}
    </>
  );
}

export default Comments;
