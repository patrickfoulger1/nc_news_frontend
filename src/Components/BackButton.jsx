import { ArrowLeft } from "@phosphor-icons/react";
import { Link } from "react-router";

function BackButton({ article_id }) {
  return (
    <Link
      to={{
        pathname: `/`,
        search: `?display=${article_id}`,
      }}
    >
      <div
        className="fixed absolute bottom-4 left-3/7 flex flex-rows bg-black rounded-full w-20 items-center m-auto "
        aria-label="back button"
      >
        <ArrowLeft size={32} color="#FFFFFF" weight="fill" />
        <span className="text-white">Back</span>
      </div>
    </Link>
  );
}

export default BackButton;
