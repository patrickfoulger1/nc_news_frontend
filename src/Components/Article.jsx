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
      <div className="flex flex-col font-noto-sans text-white h-full w-full max-w-300 m-auto items-center">
        <div className="w-screen h-5/10 md:h-3/10 overflow-clip flex justify-center">
          <img
            className="object-cover max-w-250 rounded-b-full  md:overflow-none md:w-screen max-h-200"
            src={articleImage}
            alt={title}
          ></img>
        </div>

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
