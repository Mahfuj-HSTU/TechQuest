import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from "swiper";
// import "swiper/css";
// import "swiper/css/pagination";
import { Link } from "react-router-dom";
import img1 from "../../../assets/latest_news/1.png";
import img2 from "../../../assets/latest_news/2.png";
import img3 from "../../../assets/latest_news/3.png";

const LatestNews = () => {
  const latestNews = [
    {
      id: 1,
      image: img1,
      title:
        "How FactoryFix Hired 6 Developers byStreamlining their Hiring Process ",
      description:
        "Hiring challenges lead largest manufacturing network of skilled labour and employers, FactoryFix, to turn to VanHack...",
    },
    {
      id: 2,
      image: img2,
      title: "Celebrating the Women at VanHack ",
      description:
        "We have come a long way since Ada Lovelace wrote the first codes and became computer science pioneers in the 1840s...",
    },
    {
      id: 3,
      image: img3,
      title: "Get Ukrainian Tech Talent Hired: VanHack Waives Placement Fees ",
      description:
        "VanHack Aims to Connect Employers with 100’s of Ukrainian Developers Seeking Remote Work or Relocation Opportunities...",
    },
  ];

  return (
    <div className="mx-1">
      <h1 className="text-4xl font-bold my-5">Latest News</h1>
      <Link>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
          {latestNews.map((news) => (
            <div
              key={news.id}
              className="text-left border border-black p-3 rounded-lg shadow-md w-64 md:w-auto lg:h-96"
            >
              <img className="w-48 mx-auto" src={news.image} alt="" />
              <h1 className="text-xl font-semibold mt-5">{news.title}</h1>
              <br />
              <p>{news.description}</p>
            </div>
          ))}
        </div>
      </Link>
    </div>
  );
};

export default LatestNews;
