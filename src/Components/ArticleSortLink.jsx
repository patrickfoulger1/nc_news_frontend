import { Link } from "react-router";

function ArticleSortLink({ sort }) {
  return (
    <Link
      className={`flex flex-col ${sort.active ? "bg-red-500 text-black border-red-950" : "bg-white text-black [box-shadow:5px_5px_rgb(82_82_82)] transition-all duration-100  active:translate-x-[3px] active:translate-y-[3px] active:[box-shadow:0px_0px_rgb(82_82_82)]"} text-black h-3/4 w-3/4 m-auto  items-center justify-center overflow-hidden rounded-md border border-neutral-200  px-6 font-medium `}
      to={{ path: "/", search: `?sort=${sort.query}&display=first` }}
    >
      {sort.icon}
      <p className="text-xs text-center">{sort.name}</p>
    </Link>
  );
}

export default ArticleSortLink;
