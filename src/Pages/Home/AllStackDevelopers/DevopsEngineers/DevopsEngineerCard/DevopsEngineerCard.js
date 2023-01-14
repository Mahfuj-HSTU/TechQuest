import React from "react";

const DevopsEngineerCard = ({ engineer }) => {
  const { name, img, title, country, aws, docker, devops } = engineer;
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
            AWS <span className="text-[#646464]">{aws}</span>
          </small>
          <small className="bg-gray-200 px-2 rounded font-semibold">
            Devops <span className="text-[#646464]">{devops}</span>
          </small>
          <small className="bg-gray-200 px-2 rounded font-semibold">
            Docker <span className="text-[#646464]">{docker}</span>
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

export default DevopsEngineerCard;
