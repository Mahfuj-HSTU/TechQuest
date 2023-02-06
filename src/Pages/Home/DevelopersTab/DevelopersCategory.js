import React, { useEffect, useState } from "react";
import DevelopersCard from "./DevelopersCard";
import { Link } from "react-router-dom";
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

  const handleCategory = (i) => {
    setCategory(i);
  };

  return (
    <div className="mx-auto w-[80%]">
      <div className="mb-10">
        <h2 className="text-4xl font-bold text-center">
          The world is your talent pool
        </h2>
      </div>
      <div className="tabs flex items-center gap-3 lg:flex-nowrap">
        {categories.map((category, i) => (
          <Link
            key={i}
            onClick={() => handleCategory(i)}
            className={
              "text-sm rounded pb-2 font-semibold border-b-4 hover:border-blue-500 cursor-pointer whitespace-nowrap lg:w-full"
            }
          >
            {category}
          </Link>
        ))}
      </div>
      <div className="mt-3">
        <DevelopersCard developers={developers} />
      </div>
    </div>
  );
};

export default DevelopersCategory;
