import { useContext } from "react";
import { UserAccount } from "../contexts/User";
import { NavSettings } from "../contexts/NavSettings";
import { Link } from "react-router";
import { ArrowsDownUp } from "@phosphor-icons/react";
import StarButton from "./StarButton";

function Nav() {
  const { loggedOnUser } = useContext(UserAccount);
  const {
    navSettings: {
      currentPage,
      lastArticleIdClicked,
      sortMenuActive,
      starButton,
    },
    setNavSettings,
  } = useContext(NavSettings);

  return (
    <nav
      className={`z-40 max-w-400 bg-black/75 hover:opacity-100 fixed bottom-4 left-1/2 transform -translate-x-1/2 inline-flex left-0 mx-auto justify-between w-11/12 rounded-3xl`}
    >
      <Link
        to={{
          pathname: `/`,
          search: `?display=${lastArticleIdClicked}`,
        }}
        aria-current="page"
        className={`inline-flex flex-col items-center text-xs font-medium py-3 px-4 ${
          currentPage === "Home" ? "text-red-500" : "text-white"
        } flex-grow`}
        href="#"
      >
        <svg
          className="w-7 h-7"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
        </svg>
        <p className="text-l">Home</p>
        <span className="sr-only">Home</span>
      </Link>

      <div className="transform -translate-y-4 w-16 h-16 bg-red-500 rounded-full overflow-hidden flex items-center justify-center">
        <img
          src={loggedOnUser.avatar_url}
          className="w-full h-full object-cover"
          alt="Chat"
        />
      </div>

      {currentPage === "Home" ? (
        <button
          className={`cursor-pointer inline-flex flex-col items-center text-xs font-medium py-3 px-4 flex-grow ${sortMenuActive ? "text-red-500" : "text-white"}`}
          onClick={() => {
            setNavSettings((settings) => {
              const newSettings = { ...settings };
              newSettings.sortMenuActive = !newSettings.sortMenuActive;
              return newSettings;
            });
          }}
        >
          <ArrowsDownUp
            className="w-7 h-7"
            color="currentColor"
            weight="fill"
          />
          <p className="text-l">Sort</p>
          <span className="sr-only">Sort</span>
        </button>
      ) : (
        <>
          <div className="inline-flex flex-col items-center text-xs font-medium py-3 px-4 flex-grow">
            {starButton}
            <p className="text-l font-bold text-amber-400 select-none">
              Like Article
            </p>
            <span className="sr-only">Like</span>
          </div>
        </>
      )}
    </nav>
  );
}

export default Nav;
