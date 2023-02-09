import React from "react";
import "./Circle.css";

const Circle = () => {
  return (
    <div>
      <section className="main-container">
        <div className="main">
          {/* <div className="big-circle">
            <div className="icon-block">
              <img
                src="https://ucarecdn.com/614bf107-8b04-45d2-9be6-1123d09b72ba/webdevicon.png"
                alt="web design icon"
              />
            </div>
            <div className="icon-block">
              <img
                src="https://ucarecdn.com/ffcb2c5d-1bfb-4a28-b52d-94ad412b1ced/gamedesignicon.png"
                alt="game design icon"
              />
            </div>
            <div className="icon-block">
              <img
                src="https://ucarecdn.com/37f45061-b881-47a3-985a-ebc6e6a8e81b/gamedevicon.png"
                alt="game dev icon"
              />
            </div>
            <div className="icon-block">
              <img
                src="https://ucarecdn.com/9a14f2fc-d7e7-46bf-aa1a-ee2e2210d425/uiuxicon.png"
                alt="ui-ux icon"
              />
            </div>
          </div> */}
          <div className="circle">
            <div className="icon-block">
              <img
                src="https://ucarecdn.com/ae76ecf5-1d3f-4edc-884c-dc2984976a7e/appicon.png"
                alt="app icon"
              />
            </div>
            <div className="icon-block">
              <img
                src="https://ucarecdn.com/2323ebfc-5b14-47ae-959a-191e82d0103a/blockchainicon.png"
                alt="blockchain icon"
              />
            </div>
            <div className="icon-block">
              <img
                src="https://ucarecdn.com/5e4802ac-8684-41f3-8657-1e0834d07abe/arvricon.png"
                alt="ar-vr icon"
              />
            </div>
            <div className="icon-block">
              <img
                src="https://ucarecdn.com/61a82adc-7eef-4e50-a7d5-8e11ef76ff31/artificialintelligenceicon.png"
                alt="artificial intelligence icon"
              />
            </div>
          </div>
          <div className="center-logo text-white flex">
            {/* <img
              src="https://ucarecdn.com/7014bcba-58b2-49c5-bc8b-710528bf9b0c/logo.png"
              alt="logo"
            /> */}
            <svg
              className="w-8 text-deep-purple-accent-400  font-bold"
              viewBox="0 0 24 24"
              strokeLinejoin="round"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              stroke="currentColor"
              fill="none"
            >
              <rect x="3" y="1" width="7" height="12" />
              <rect x="3" y="17" width="7" height="6" />
              <rect x="14" y="1" width="7" height="6" />
              <rect x="14" y="11" width="7" height="12" />
            </svg>
            <span className="ml-2 text-xl font-bold tracking-wide uppercase">
              TechQuest
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Circle;
