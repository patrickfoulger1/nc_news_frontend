import { useState, useContext } from "react";
import { postComment } from "../utils/ncnews-api";
import { UserAccount } from "../contexts/UserAccount";

function AddCommentForm({ article_id, setComments, comments }) {
  const [commentBody, setCommentBody] = useState("");
  const [sendingComment, setSendingComment] = useState(false);
  const [error, setError] = useState(null);
  const {
    loggedOnUser: { username },
  } = useContext(UserAccount);

  const validateComment = (comment) => {
    if (comment.length === 0) {
      return "Can't post an empty comment";
    }

    return null;
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const error = validateComment(commentBody);
    setError(error);

    if (!error && !sendingComment) {
      setSendingComment(true);
      postComment(username, commentBody, article_id)
        .then((res) => {
          setSendingComment(false);
          setComments([res.comment, ...comments]);
          setCommentBody("");
        })
        .catch((error) => {
          setSendingComment(false);
          setError("We had a problem posting that comment");
        });
    }
  };
  return (
    <form
      className="w-full m-auto flex flex-col items-center"
      onSubmit={handleSubmit}
    >
      <section className="w-2/3 h-full  py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-red-950 ">
        <label htmlFor="comment" className="sr-only"></label>
        <textarea
          id="comment"
          rows="3"
          className="w-full bg-white text-sm text-black border-0  focus:outline-none  "
          placeholder="Write a comment..."
          onChange={(e) => {
            setCommentBody(e.target.value);
          }}
          value={commentBody}
        ></textarea>
      </section>
      <input
        type="submit"
        value={sendingComment ? "Sending..." : "Post Comment"}
        className={`${
          sendingComment
            ? "cursor-progress bg-gray-800"
            : "cursor-pointer hover:bg-red-800"
        }  m-2 w-40 h-10 bg-black text-white font-bold py-2 px-4 rounded-full`}
      />
      {error ? <p className="text-black italic">{error}</p> : null}
    </form>
  );
}

export default AddCommentForm;
