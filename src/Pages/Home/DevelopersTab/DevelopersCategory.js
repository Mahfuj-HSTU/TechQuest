import React, { useEffect, useState } from "react";
import DevelopersCard from "./DevelopersCard";

const categories = [
  "FRONTEND DEVELOPERS",
  "BACKEND DEVELOPERS",
  "FULLSTACK DEVELOPERS",
  "MOBILE DEVELOPERS",
  "DEVOPS ENGINEERS",
];

const DevelopersCategory = () => {
  const [category, setCategory] = useState(0);
  const [developers, setDevelopers] = useState([]);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    fetch("data/developers.json")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setDevelopers(data[category]);
      })
      .catch((e) => {
        console.error("Developers fetch error => ", e);
      });
  }, [category]);

  // console.log(developers[category]);
  // console.log(developers);

  const handleCategory = (e) => {
    // console.log(e);
    setCategory(e);
    setIsActive(true);
  };

  return (
    <div className="mx-3">
      <div className="mb-10">
        <h2 className="text-4xl font-bold text-center">
          The world is your talent pool
        </h2>
      </div>
      <div className="tabs grid grid-cols-1 md:flex justify-between gap-3 ">
        {categories.map((category, i) => (
          <div
            key={i}
            onClick={() => handleCategory(i)}
            className={
              category === i && isActive
                ? "  tab-bordered font-bold pb-3 mb-6 text-[#0675CE] border-b-4 border-[#0675CE]  hover:text-[#0675CE]  hover:border-b-4 hover:border-[#0675CE]"
                : "tab-bordered font-bold pb-3 mb-6 text-[#646464]  hover:text-[#0675CE]  hover:border-b-4 hover:border-[#0675CE]"
            }
            // className="tab tab-bordered"
          >
            {category}
          </div>
        ))}
        <div className="">
          <DevelopersCard developers={developers} />
        </div>
      </div>
    </div>
  );
};

export default DevelopersCategory;
