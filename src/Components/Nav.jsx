function Nav() {
  return (
    <nav className="fixed z-4">
      <div
        className={` bg-black/75 hover:opacity-100 fixed bottom-4 left-1/2 transform -translate-x-1/2 inline-flex left-0 mx-auto justify-between w-11/12 rounded-3xl`}
      >
        <a
          aria-current="page"
          className="inline-flex flex-col items-center text-xs font-medium py-3 px-4 text-white flex-grow"
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
        </a>
        <a
          className="opacity-100 inline-flex flex-col items-center text-xs font-medium text-white py-3 px-4 flex-grow"
          href="#"
        >
          <svg
            className="w-7 h-7"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
        <span className="sr-only">Upload</span>
        <button className="transform -translate-y-4 w-16 h-16 bg-red-500 rounded-full overflow-hidden flex items-center justify-center">
          <img
            src="https://vignette1.wikia.nocookie.net/mrmen/images/7/7f/Mr_Happy.jpg/revision/latest?cb=20140102171729"
            className="w-full h-full object-cover"
            alt="Chat"
          />
          <span className="sr-only">Chat</span>
        </button>
        <a
          className="inline-flex flex-col items-center text-xs font-medium text-white py-3 px-4 flex-grow"
          href="#"
        >
          <svg
            className="w-7 h-7"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">Search</span>
        </a>
        <a
          className="inline-flex flex-col items-center text-xs font-medium text-white py-3 px-4 flex-grow"
          href="#"
        >
          <svg
            className="w-7 h-7"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">Profile</span>
        </a>
      </div>
    </nav>
  );
}

export default Nav;
