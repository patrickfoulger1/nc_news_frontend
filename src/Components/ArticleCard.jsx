import { Star, ChatCircleText } from "@phosphor-icons/react";
import { Link, useNavigate, useSearchParams } from "react-router";
import { getDate } from "../utils/formatter";
import { useContext, useState } from "react";
import { NavSettings } from "../contexts/NavSettings";

function ArticleCard({
  article: {
    article_id,
    article_img_url,
    title,
    created_at,
    votes,
    comment_count,
    topic,
  },
}) {
  const { setNavSettings } = useContext(NavSettings);
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();
  const sort = searchParams.get("sort");
  const sortQuery = sort ? `&sort=${sort}` : "";

  return (
    <figure
      className={`w-full h-full`}
     
    >
      <img
        className="object-cover h-full w-full contrast-100"
        src={article_img_url}
        alt={title}
      />
      <figcaption className="absolute bottom-1/4 md:bottom-3/13 lg:bottom-1/11 left-1/2 flex w-[calc(100%-4rem)] -translate-x-1/2 justify-between rounded-xl border border-white bg-white/90 py-4 px-6 shadow-lg shadow-black/5 ">
        <div>
          <h5 className="text-xl font-medium text-slate-800">{title}</h5>
          <p className="mt-2 text-slate-600">{getDate(created_at)}</p>

          <p className="inline-block cursor-pointer bg-red-500 rounded-sm p-1 text-white w-inherit hover:bg-white hover:text-black">
            <a
              onClick={() => {
                navigate(`/${article_id}`);
                setNavSettings((settings) => {
                  const newSettings = { ...settings };
                  newSettings.lastArticleIdClicked = article_id;
                  return newSettings;
                });
              }}
            >
              Read More
            </a>
          </p>
          <Link
            to={{
              pathname: `/`,
              search: `?topic=${topic}&display=first${sortQuery}`,
            }}
          >
            <p className="m-4 inline-block cursor-pointer bg-black rounded-sm p-1 text-white w-inherit hover:bg-white hover:text-black">
              #{topic}
            </p>
          </Link>
          <p className="flex flex-rows items-center">
            <Star
              className="m-3 mr-1"
              size={25}
              weight="fill"
              color="#FB2C36"
            ></Star>
            {votes} likes
            <ChatCircleText
              className=" m-3 mr-1"
              size={25}
              weight="fill"
              color="#FB2C36"
            ></ChatCircleText>
            {comment_count} comments
          </p>
        </div>
      </figcaption>
    </figure>
  );
}

export default ArticleCard;
