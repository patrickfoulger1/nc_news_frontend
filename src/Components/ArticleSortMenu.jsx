import ArticleSortLink from "./ArticleSortLink";

function ArticleSortMenu({ visible, sorts }) {
  const sortLinks = sorts.map((sort) => {
    return <ArticleSortLink key={sort.name} sort={sort} />;
  });
  return (
    <>
      <section
        className={`${visible ? "" : "hidden"} grid grid-cols-3 grid-rows-2 gap-0 absolute flex bottom-25 left-1/2 md:left-3/4 2xl:left-11/16   transform -translate-x-1/2 fixed absolute w-1/4 min-w-100 max-w-100 h-50  z-50`}
      >
        {sortLinks}
      </section>
    </>
  );
}

export default ArticleSortMenu;
