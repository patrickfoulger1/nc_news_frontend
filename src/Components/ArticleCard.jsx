function ArticleCard({ article }) {
  return (
    <figure className="relative w-full h-full">
      <img
        className="object-cover object-center w-full h-full "
        src={article.article_img_url}
        alt="nature image"
      />
      <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
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
  );
}

export default ArticleCard;
