import { Link } from "react-router";

const Navbar = ({ isAdd }) => {
  return (
    <div className="top-0 left-0 w-full z-50 bg-[#1c2541] border-b border-[#3a506b] shadow-2xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 justify-between items-center">
          <div className="flex flex-1 items-stretch justify-start">
            <Link
              className="flex flex-shrink-0 items-center transition duration-150 hover:opacity-80"
              to="/home"
            >
              <img
                className="block h-10 w-auto"
                src="https://www.svgrepo.com/show/501888/donut.svg"
                alt="Donut App Logo"
              />
              <span className="ml-2 text-xl font-bold text-white tracking-tight hidden sm:block">
                BugList
              </span>
            </Link>
          </div>

          <div className="flex-shrink-0 flex items-center space-x-4 sm:space-x-6">
            <Link
              to={isAdd ? "/home" : "/add-bug"}
              className="text-[#1c2541] bg-[#5bc0be] hover:bg-[#6fffe9] inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg shadow-lg transition duration-200 ease-in-out transform hover:scale-[1.02]"
            >
              {isAdd ? "Back to home" : "Add bug"}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
