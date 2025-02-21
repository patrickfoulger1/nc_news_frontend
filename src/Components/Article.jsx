import { Star } from "@phosphor-icons/react/dist/ssr";
import { NavSettings } from "../contexts/NavSettings";
import { getDate } from "../utils/formatter";

import Comments from "./Comments";
import StarButton from "./StarButton";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router";
import { ChatCircleText } from "@phosphor-icons/react";
function Article({
  article: {
    article_img_url: articleImage,
    title,
    body,
    article_id,
    author,
    created_at,
    votes,
    topic,
    comment_count,
  },
}) {
  const [articleVotes, setArticleVotes] = useState(votes);
  const [articleCommentCount, setArticleCommentCount] = useState(comment_count);
  const { setNavSettings } = useContext(NavSettings);

  useEffect(() => {
    setNavSettings((settings) => {
      const newSettings = { ...settings };
      newSettings.starButton = (
        <StarButton
          article_id={article_id}
          articleVotes={articleVotes}
          setArticleVotes={setArticleVotes}
          originalVotes={votes}
        ></StarButton>
      );

      return newSettings;
    });
  }, []);

  return (
    <>
      <div className="flex flex-col font-noto-sans text-white h-full w-9/10 max-w-300 m-auto items-center pb-8">
        <div className="w-screen h-5/10 md:h-3/10 flex justify-center p-0">
          <img
            className="object-cover rounded-b-full  md:overflow-none md:w-screen max-h-100"
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
        <Link
          to={{
            pathname: `/`,
            search: `?topic=${topic}&display=${article_id}`,
          }}
        >
          <p className="inline-block cursor-pointer m-2 bg-black rounded-sm p-1 text-white w-inherit hover:bg-white hover:text-black">
            #{topic}
          </p>
        </Link>

        <p className="m-3 text-l max-w-8/10 m-3">{body}</p>

        <p className="flex flex-rows items-center">
          <Star
            className="m-3 mr-1 text-amber-300"
            size={25}
            weight="fill"
          ></Star>
          {articleVotes} likes
          <ChatCircleText
            className=" m-3 mr-1"
            size={25}
            weight="fill"
            color="white"
          ></ChatCircleText>
          {articleCommentCount} comments
        </p>

        <Comments
          article_id={article_id}
          setArticleCommentCount={setArticleCommentCount}
          articleCommentCount={articleCommentCount}
        ></Comments>
      </div>
    </>
  );
}
export default Article;
