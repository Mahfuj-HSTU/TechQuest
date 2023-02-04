import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const Review = () => {
  const reviewInfo = {
    img: "https://source.unsplash.com/100x100/?portrait",
    userName: "Leroy Jenkins",
    duration: "2 days ago",
    star: 5,
    text: "Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu dictum lectus consequat vitae.",
  };
  return (
    <div data-aos="fade-up" className="mx-10">
      <Swiper
        slidesPerView={ 3 }
        spaceBetween={ 10 }
        pagination={ {
          clickable: true,
        } }
        modules={ [ Pagination ] }
        className="mySwiper"
      >
        { [ 1, 2, 3, 4, 5 ].map( ( review, i ) => (
          <SwiperSlide key={ i }>
            <div className="my-16 lg:h-56 border-2 rounded-lg p-3 divide-y divide-black shadow-md">
              <div className="flex flex-col lg:flex-row gap-5 items-center ">
                <img
                  src={ reviewInfo.img }
                  className="rounded-full w-16 my-2"
                  alt=""
                />
                <div className="flex flex-col items-start">
                  <p className="font-bold">{ reviewInfo.userName }</p>
                  <p>{ reviewInfo.duration }</p>
                  <div className="flex rating rating-sm p-1">
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-400"
                      defaultChecked
                    />
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-400"
                    />
                  </div>
                </div>
              </div>
              <div>
                <p className="my-2 text-left">{ reviewInfo.text }</p>
              </div>
            </div>
          </SwiperSlide>
        ) ) }
      </Swiper>
    </div>
  );
};

export default Review;
