import React from "react";

const DevelopersCard = ({ developers }) => {
  //   console.log(developers);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 -p-2 ">
      {developers.map((dev) => {
        // console.log(i);
        return (
          <div key={dev._id}>
            {/* {dev._id} */}
            <div data-aos="fade-left" className="p-5 border  rounded-md w-auto">
              <div className=" h-[250px]">
                <img className="w-full h-full" src={dev.img} alt="" />
              </div>
              <div>
                <h3 className="text-xl my-4 font-bold">{dev.name}</h3>
                <p>{`${dev.title} from ${dev.country}`}</p>
              </div>
              <div className="flex flex-wrap gap-3 mt-3">
                {dev.skills.map((skill, i) => (
                  <small
                    key={i}
                    className="bg-gray-200 px-2 rounded-lg font-semibold"
                  >
                    <span className="text-[#646464]">{skill}</span>
                  </small>
                ))}
              </div>

              <div className="my-6">
                <button className="btn border text-[#0675CE] border-[#0675CE] w-full btn-outline font-bold hover:text-white hover:bg-[#0675CE]">
                  {" "}
                  Sign Up To See Profile
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DevelopersCard;
