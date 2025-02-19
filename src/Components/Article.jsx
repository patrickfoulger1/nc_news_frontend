import { Star } from "@phosphor-icons/react";
import { getDate } from "../utils/formatter";
import BackButton from "./BackButton";
import Comments from "./Comments";
import StarButton from "./StarButton";
import { useEffect, useState } from "react";

function Article({
  article: {
    article_img_url: articleImage,
    title,
    body,
    article_id,
    author,
    created_at,
    votes,
  },
}) {
  const [articleVotes, setArticleVotes] = useState(votes);

  return (
    <>
      <div className="flex flex-col font-noto-sans text-white h-full w-full m-auto items-center">
        <img
          className="max-w-100 rounded-b-full"
          src={articleImage}
          alt={title}
        ></img>
        <h1 className="font-black text-white text-center text-xl m-3 ">
          {title}
        </h1>
        <p className="text-xs text-stone-700">
          {author} - {getDate(created_at)}
        </p>

        <p className="m-3 text-l max-w-8/10 m-3">{body}</p>
        <StarButton
          article_id={article_id}
          articleVotes={articleVotes}
          setArticleVotes={setArticleVotes}
          originalVotes={votes}
        ></StarButton>
        <BackButton article_id={article_id} />

        <span className="">{articleVotes} likes</span>

        <Comments article_id={article_id}></Comments>
      </div>
    </>
  );
}

export default Article;
