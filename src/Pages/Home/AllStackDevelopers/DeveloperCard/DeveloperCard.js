import Aos from "aos";
import React from "react";

const DeveloperCard = ({ developer }) => {
  const { name, img, title, country, javascript, react, html } = developer;
  return (
    <div data-aos="fade-left" className="card p-8 border ">
      <div className="w-full h-[250px]">
        <img className="w-full h-full" src={img} alt="" />
      </div>
      <div>
        <h3 className="text-xl my-4 font-bold">{name}</h3>
        <p>{`${title} from ${country}`}</p>

        <div className="flex justify-between mt-6">
          <small className="bg-gray-200 px-2 rounded font-semibold">
            Javascript <span className="text-[#646464]">{javascript}</span>
          </small>
          <small className="bg-gray-200 px-2 rounded font-semibold">
            React <span className="text-[#646464]">{react}</span>
          </small>
          <small className="bg-gray-200 px-2 rounded font-semibold">
            Html <span className="text-[#646464]">{html}</span>
          </small>
        </div>
      </div>
      <div className="my-6">
        <button className="btn border text-[#0675CE] border-[#0675CE] w-full btn-outline font-bold hover:text-white hover:bg-[#0675CE]">
          {" "}
          Sign Up To See Profile
        </button>
      </div>
    </div>
  );
};

export default DeveloperCard;
