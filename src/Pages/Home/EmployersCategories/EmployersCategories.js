import React from "react";

const EmployersCategories = () => {
  const categories = [
    "9071+ Javascript Engineers",
    "3621+ Python Engineers",
    "9071+ React Engineers",
    "3571+ DevOps Engineers",
    "9071+ UI/UX Designers",
    "4071+ Mobile Developer",
    "9071+ Java Developers",
    "9071+ Q.A Specialists",
  ];
  return (
    <div
      data-aos="fade-up"
      className="grid grid-cols-1 md:grid-cols-2 gap-3 whitespace-nowrap mt-12 mx-2 p-2 my-10"
    >
      { categories.map( ( category, i ) => (
        <div
          key={ i }
          className="rounded-lg border bg-[#F2F6F9] transition duration-300 gap-4"
        >
          <div className="rounded-lg flex items-center justify-center gap-5 p-5 hover:bg-sky-500 hover:shadow-xl hover:text-white w-auto">
            <span className="focus:outline-none transition duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M6.28 5.22a.75.75 0 010 1.06L2.56 10l3.72 3.72a.75.75 0 01-1.06 1.06L.97 10.53a.75.75 0 010-1.06l4.25-4.25a.75.75 0 011.06 0zm7.44 0a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L17.44 10l-3.72-3.72a.75.75 0 010-1.06zM11.377 2.011a.75.75 0 01.612.867l-2.5 14.5a.75.75 0 01-1.478-.255l2.5-14.5a.75.75 0 01.866-.612z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            {/* 9071+ Javascript Engineers */ }
            <span className="text-gray text-xl font-bold text-center hover:text-white">
              { category }
            </span>
            <span className="rounded-full hover:text-white-700 focus:outline-none transition duration-300 hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                />
              </svg>
            </span>
          </div>
        </div>
      ) ) }
      {/* <div className="rounded-2xl hover:rounded-lg  border-2 border-slate-400 transition duration-300 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2 gap-4 hover:bg-sky-500  hover:text-purple-900 hover:shadow-xl ">
        <h5 className="text-gray text-2xl font-bold leading-none m-4 text-center">
          <button href="javascript" className=" m-2 rounded-full   text-black ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M6.28 5.22a.75.75 0 010 1.06L2.56 10l3.72 3.72a.75.75 0 01-1.06 1.06L.97 10.53a.75.75 0 010-1.06l4.25-4.25a.75.75 0 011.06 0zm7.44 0a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L17.44 10l-3.72-3.72a.75.75 0 010-1.06zM11.377 2.011a.75.75 0 01.612.867l-2.5 14.5a.75.75 0 01-1.478-.255l2.5-14.5a.75.75 0 01.866-.612z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          3621+ Python Engineers
          <button
            href="javascript"
            className=" m-2 rounded-full   text-black hover:bg-slate-300  hover:text-white-700 hover:shadow-xl focus:outline-none w-10 h-10  transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
              />
            </svg>
          </button>
        </h5>
      </div>
      <div className="rounded-2xl hover:rounded-lg  border-2 border-slate-400 transition duration-300 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2 gap-4 hover:bg-sky-500  hover:text-purple-900 hover:shadow-xl ">
        <h5 className="text-gray text-2xl font-bold leading-none m-4 text-center">
          <button href="javascript" className=" m-2 rounded-full   text-black ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M6.28 5.22a.75.75 0 010 1.06L2.56 10l3.72 3.72a.75.75 0 01-1.06 1.06L.97 10.53a.75.75 0 010-1.06l4.25-4.25a.75.75 0 011.06 0zm7.44 0a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L17.44 10l-3.72-3.72a.75.75 0 010-1.06zM11.377 2.011a.75.75 0 01.612.867l-2.5 14.5a.75.75 0 01-1.478-.255l2.5-14.5a.75.75 0 01.866-.612z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          9071+ React Engineers
          <button
            href="javascript"
            className=" m-2 rounded-full   text-black hover:bg-slate-300  hover:text-white-700 hover:shadow-xl focus:outline-none w-10 h-10  transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
              />
            </svg>
          </button>
        </h5>
      </div>
      <div className="rounded-2xl hover:rounded-lg  border-2 border-slate-400 transition duration-300 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2 gap-4 hover:bg-sky-500  hover:text-purple-900 hover:shadow-xl ">
        <h5 className="text-gray text-2xl font-bold leading-none m-4 text-center">
          <button href="javascript" className=" m-2 rounded-full   text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M6.28 5.22a.75.75 0 010 1.06L2.56 10l3.72 3.72a.75.75 0 01-1.06 1.06L.97 10.53a.75.75 0 010-1.06l4.25-4.25a.75.75 0 011.06 0zm7.44 0a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L17.44 10l-3.72-3.72a.75.75 0 010-1.06zM11.377 2.011a.75.75 0 01.612.867l-2.5 14.5a.75.75 0 01-1.478-.255l2.5-14.5a.75.75 0 01.866-.612z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          3571+ DevOps Engineers
          <button
            href="javascript"
            className=" m-2 rounded-full   text-black hover:bg-slate-300  hover:text-white-700 hover:shadow-xl focus:outline-none w-10 h-10  transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
              />
            </svg>
          </button>
        </h5>
      </div>
      <div className="rounded-2xl hover:rounded-lg  border-2 border-slate-400 transition duration-300 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2 gap-4 hover:bg-sky-500  hover:text-purple-900 hover:shadow-xl ">
        <h5 className="text-gray text-2xl font-bold leading-none m-4 text-center">
          <button href="javascript" className=" m-2 rounded-full   text-black ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M6.28 5.22a.75.75 0 010 1.06L2.56 10l3.72 3.72a.75.75 0 01-1.06 1.06L.97 10.53a.75.75 0 010-1.06l4.25-4.25a.75.75 0 011.06 0zm7.44 0a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L17.44 10l-3.72-3.72a.75.75 0 010-1.06zM11.377 2.011a.75.75 0 01.612.867l-2.5 14.5a.75.75 0 01-1.478-.255l2.5-14.5a.75.75 0 01.866-.612z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          9071+ UI/UX Designers
          <button
            href="javascript"
            className=" m-2 rounded-full   text-black hover:bg-slate-300  hover:text-white-700 hover:shadow-xl focus:outline-none w-10 h-10  transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
              />
            </svg>
          </button>
        </h5>
      </div>
      <div className="rounded-2xl hover:rounded-lg  border-2 border-slate-400 transition duration-300 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2 gap-4 hover:bg-sky-500  hover:text-purple-900 hover:shadow-xl ">
        <h5 className="text-gray text-2xl font-bold leading-none m-4 text-center">
          <button href="javascript" className=" m-2 rounded-full   text-black ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M6.28 5.22a.75.75 0 010 1.06L2.56 10l3.72 3.72a.75.75 0 01-1.06 1.06L.97 10.53a.75.75 0 010-1.06l4.25-4.25a.75.75 0 011.06 0zm7.44 0a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L17.44 10l-3.72-3.72a.75.75 0 010-1.06zM11.377 2.011a.75.75 0 01.612.867l-2.5 14.5a.75.75 0 01-1.478-.255l2.5-14.5a.75.75 0 01.866-.612z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          4071+ Mobile Developer
          <button
            href="javascript"
            className=" m-2 rounded-full   text-black hover:bg-slate-300  hover:text-white-700 hover:shadow-xl focus:outline-none w-10 h-10  transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
              />
            </svg>
          </button>
        </h5>
      </div>
      <div className="rounded-2xl hover:rounded-lg  border-2 border-slate-400 transition duration-300 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2 gap-4 hover:bg-sky-500  hover:text-purple-900 hover:shadow-xl ">
        <h5 className="text-gray text-2xl font-bold leading-none m-4 text-center">
          <button
            href="javascript"
            className=" m-2 rounded-full   text-black hover:bg-slate-300  hover:text-white-700 hover:shadow-xl focus:outline-none w-10 h-10  transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M6.28 5.22a.75.75 0 010 1.06L2.56 10l3.72 3.72a.75.75 0 01-1.06 1.06L.97 10.53a.75.75 0 010-1.06l4.25-4.25a.75.75 0 011.06 0zm7.44 0a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L17.44 10l-3.72-3.72a.75.75 0 010-1.06zM11.377 2.011a.75.75 0 01.612.867l-2.5 14.5a.75.75 0 01-1.478-.255l2.5-14.5a.75.75 0 01.866-.612z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          9071+ Java Developers
          <button
            href="javascript"
            className=" m-2 rounded-full   text-black hover:bg-slate-300  hover:text-white-700 hover:shadow-xl focus:outline-none w-10 h-10  transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
              />
            </svg>
          </button>
        </h5>
      </div>
      <div className="rounded-2xl hover:rounded-lg  border-2 border-slate-400 transition duration-300 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2 gap-4 hover:bg-sky-500  hover:text-purple-900 hover:shadow-xl ">
        <h5 className="text-gray text-2xl font-bold leading-none m-4 text-center">
          <button
            href="javascript"
            className=" m-2 rounded-full   text-black hover:bg-slate-300  hover:text-white-700 hover:shadow-xl focus:outline-none w-10 h-10  transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M6.28 5.22a.75.75 0 010 1.06L2.56 10l3.72 3.72a.75.75 0 01-1.06 1.06L.97 10.53a.75.75 0 010-1.06l4.25-4.25a.75.75 0 011.06 0zm7.44 0a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L17.44 10l-3.72-3.72a.75.75 0 010-1.06zM11.377 2.011a.75.75 0 01.612.867l-2.5 14.5a.75.75 0 01-1.478-.255l2.5-14.5a.75.75 0 01.866-.612z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          9071+ Q.A Specialists
          <button
            href="javascript"
            className=" m-2 rounded-full   text-black hover:bg-slate-300  hover:text-white-700 hover:shadow-xl focus:outline-none w-10 h-10  transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
              />
            </svg>
          </button>
        </h5>
      </div> */}
    </div>
  );
};

export default EmployersCategories;
