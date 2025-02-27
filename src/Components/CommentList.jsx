import AddCommentForm from "./AddCommentForm";
import Comment from "./Comment";

function CommentList({ comments }) {
  const commentElement = comments.map((comment) => {
    return <Comment key={comment.comment_id} comment={comment} />;
  });

  return <ul className="m-8 pb-20">{commentElement}</ul>;
}

export default CommentList;
