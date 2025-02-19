import { Star } from "@phosphor-icons/react";
import { Link } from "react-router";
import { getDate } from "../utils/formatter";

function ArticleCard({
  article: { article_id, article_img_url, title, created_at, votes },
}) {
  return (
    <Link
      to={{
        pathname: `/${article_id}`,
      }}
    >
      <figure className="w-full h-full hover:border-red-500 hover:border-3">
        <img
          className="object-cover h-full w-full"
          src={article_img_url}
          alt={title}
        />
        <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/90 py-4 px-6 shadow-lg shadow-black/5 ">
          <div>
            <h5 className="text-xl font-medium text-slate-800">{title}</h5>
            <p className="mt-2 text-slate-600">{getDate(created_at)}</p>

            <p className="flex flex-rows items-center">
              <Star
                className="m-2"
                size={25}
                weight="fill"
                color="#FB2C36"
              ></Star>
              {votes} likes
            </p>
          </div>
        </figcaption>
      </figure>
    </Link>
  );
}

export default ArticleCard;
