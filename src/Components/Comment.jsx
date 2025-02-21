import { useContext, useState } from "react";
import { getDate } from "../utils/formatter";
import { UserAccount } from "../contexts/User";
import { Trash } from "@phosphor-icons/react";
import { deleteComment } from "../utils/ncnews-api";

function Comment({ comment: { author, body, created_at, comment_id } }) {
  const {
    loggedOnUser: { username },
  } = useContext(UserAccount);

  const [deletingComment, setDeletingComment] = useState(false);
  const [commentDeleted, setCommentDeleted] = useState(false);
  const [commentBody, setCommentBody] = useState(body);
  const [error, setError] = useState(null);

  const deleteButton = () => {
    setDeletingComment(true);
    setError(null);
    setCommentBody("...");
    deleteComment(comment_id)
      .then(() => {
        setDeletingComment(false);
        setCommentBody("comment removed");
        setCommentDeleted(true);
      })
      .catch((error) => {
        setDeletingComment(false);
        setCommentBody(body);
        setError("We had trouble deleting your comment");
      });
  };

  return (
    <>
      <li className="flex max-w-250 ">
        <br />
        <p className="w-2/4 border-t-1 border-black">
          <span>{author}</span>
          <br />
          <span className="text-xs text-stone-700">{getDate(created_at)}</span>
        </p>

        <p
          className={`w-3/4 text-xs sm:text-xl border-t-1 border-black ${
            commentDeleted || deletingComment ? "italic text-black" : ""
          }`}
        >
          {commentBody}
          {error ? (
            <span className="italic text-black">
              <br />
              {error}
            </span>
          ) : null}
        </p>

        <span
          className={`w-16 h-15 text-black ${
            username === author ? "border-none" : "border-t-1"
          }`}
        >
          {username === author && !commentDeleted ? (
            <button
              onClick={() => {
                if (!deletingComment) {
                  deleteButton();
                }
              }}
              aria-label="delete comment"
              className={`${
                deletingComment
                  ? "cursor-progress bg-gray-800"
                  : "cursor-pointer hover:bg-red-800"
              } float-end w-full h-full bg-black text-white `}
            >
              <Trash className="m-auto" size={16} />
              {deletingComment ? "Deleting..." : "Delete"}
            </button>
          ) : null}
        </span>
      </li>
      <br />
    </>
  );
}

export default Comment;
