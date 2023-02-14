import React from "react";

const DevelopersCard = ( { developers } ) => {
  //   console.log(developers);

  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-3 -p-2 ">
      { developers.map( ( dev ) => {
        // console.log(i);
        return (
          <div key={ dev._id }>
            {/* {dev._id} */ }
            <div data-aos="fade-up" className="p-3 border  rounded-md w-auto shadow-lg">
              <div className=" h-[250px]">
                <img className="w-full h-full rounded-md" src={ dev.img } alt="" />
              </div>
              <div>
                <h3 className="text-xl my-4 font-bold">{ dev.name }</h3>
                <p>{ `${ dev.title } from ${ dev.country }` }</p>
              </div>
              <div className="flex flex-wrap gap-3 mt-3">
                { dev.skills.map( ( skill, i ) => (
                  <small
                    key={ i }
                    className="bg-gray-200 px-2 rounded-lg font-semibold"
                  >
                    <span className="text-[#646464]">{ skill }</span>
                  </small>
                ) ) }
              </div>

              <div className="my-6">
                <button className="btn border text-primary border-primary w-full bg-white outline-accent font-bold hover:text-white hover:bg-accent">
                  { " " }
                  Sign Up To See Profile
                </button>
              </div>
            </div>
          </div>
        );
      } ) }
    </div>
  );
};

export default DevelopersCard;
