import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
    setCategory(e)
  };

  return (
    <div className="mx-3">
      <div className="tabs gap-3">
        {categories.map((category, i) => (
          <Link
            key={i}
            onClick={() => handleCategory(i)}
            className="tab tab-bordered"
          >
            {category}
          </Link>
        ))}
        <div className="">
          <DevelopersCard developers={developers} />
        </div>
      </div>
    </div>
  );
};

export default DevelopersCategory;
