

function Article({ article: { article_img_url: articleImage, title, body } }) {
  return (
    <div className="flex flex-col font-noto-sans text-white h-full w-full m-auto items-center">
      <img
        className="max-w-100 rounded-b-full"
        src={articleImage}
        alt={title}
      ></img>
      <h1 className="font-extrabold text-center text-xl m-3 ">{title}</h1>
      <p className="m-3 text-l max-w-8/10">{body}</p>
    </div>

    <BackButton></BackButton>
  );
}

export default Article;
