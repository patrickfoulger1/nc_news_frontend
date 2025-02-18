import { Link } from "react-router";

function ArticleCard({ article }) {
  return (
    <Link
      to={{
        pathname: `/${article.article_id}`,
      }}
    >
      <figure className="w-full h-full hover:border-red-500 hover:border-3">
        <img
          className="object-cover h-full w-full"
          src={article.article_img_url}
          alt={article.title}
        />
        <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/90 py-4 px-6 shadow-lg shadow-black/5 ">
          <div>
            <h5 className="text-xl font-medium text-slate-800">
              {article.title}
            </h5>
            <p className="mt-2 text-slate-600">
              {new Date(article.created_at).toUTCString().slice(0, 16)}
            </p>
          </div>
        </figcaption>
      </figure>
    </Link>
  );
}

export default ArticleCard;
