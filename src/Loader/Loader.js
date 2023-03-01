import React from "react";
import "./Loader.css";
const Loader = () => {
  return (
    <div className="handle-preloader">
      <div className="animation-preloader">
        {/* <div className="spinner"></div> */}
        <div className="text-loading">
            <svg
              className="w-[20%] text-white spinner"
              viewBox="0 0 24 24"
              strokeLinejoin="round"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              stroke="currentColor"
              fill="none"
              >
                {/* <p>TechQuest</p> */}
              <rect x="3" y="1" width="7" height="12" />
              <rect x="3" y="17" width="7" height="6" />
              <rect x="14" y="1" width="7" height="6" />
              <rect x="14" y="11" width="7" height="12" />
            </svg>
          <span data-text-preloader="Tech" className="letters-loading">
            Tech
          </span>
          <span data-text-preloader="Quest" className="letters-loading">
            Quest
          </span>
          <span data-text-preloader="TechQuest" className="letters-loading">
            TechQuest
          </span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
