import { useContext } from "react";
import { UserAccount } from "../contexts/User";
import { NavSettings } from "../contexts/NavSettings";
import { Link } from "react-router";

function Nav() {
  const { loggedOnUser } = useContext(UserAccount);
  const {
    navSettings: { currentPage, lastArticleIdClicked },
  } = useContext(NavSettings);

  return (
    <nav
      className={`z-40 bg-black/75 hover:opacity-100 fixed bottom-4 left-1/2 transform -translate-x-1/2 inline-flex left-0 mx-auto justify-between w-11/12 rounded-3xl`}
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
        <span className="sr-only">Home</span>
      </Link>

      <div className="transform -translate-y-4 w-16 h-16 bg-red-500 rounded-full overflow-hidden flex items-center justify-center">
        <img
          src={loggedOnUser.avatar_url}
          className="w-full h-full object-cover"
          alt="Chat"
        />
      </div>

      <Link className="inline-flex flex-col items-center text-xs font-medium text-white py-3 px-4 flex-grow">
        <svg
          className="w-7 h-7"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
            clipRule="evenodd"
          ></path>
        </svg>
        <span className="sr-only">Profile</span>
      </Link>
    </nav>
  );
}

export default Nav;
