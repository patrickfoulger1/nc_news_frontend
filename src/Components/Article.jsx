import { getDate } from "../utils/formatter";
import BackButton from "./BackButton";
import Comments from "./Comments";
import StarButton from "./StarButton";

function Article({
  article: {
    article_img_url: articleImage,
    title,
    body,
    article_id,
    author,
    created_at,
  },
}) {
  return (
    <>
      <div className="flex flex-col font-noto-sans text-white h-full w-full m-auto items-center">
        <img
          className="max-w-100 rounded-b-full"
          src={articleImage}
          alt={title}
        ></img>
        <h1 className="font-black text-white text-center [text-shadow:_0_2px_0_rgb(0_0_0_/_40%)] text-xl m-3 ">
          {title}
        </h1>
        <p className="text-xs text-stone-700">
          written by {author} on {getDate(created_at)}
        </p>

        <p className="m-3 text-l max-w-8/10 m-3">{body}</p>

        <BackButton article_id={article_id} />
        <StarButton></StarButton>
        <Comments article_id={article_id}></Comments>
      </div>
    </>
  );
}

export default Article;
