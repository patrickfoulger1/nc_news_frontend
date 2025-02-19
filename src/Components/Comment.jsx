import { getDate } from "../utils/formatter";

function Comment({ comment: { author, body, created_at } }) {
  return (
    <>
      <li className="flex border-t-1 border-white max-w-300 min-w-100">
        <br />
        <p className="w-2/4">
          <span>{author}</span>
          <br />
          <span className="text-xs text-stone-700">{getDate(created_at)}</span>
        </p>

        <p className="w-3/4 "> {body}</p>
      </li>
      <br />
    </>
  );
}

export default Comment;
