"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const HomeSwiper = () => {
  const [homeData, setHomeData] = useState([]);
  const data = "/api/home.json";

  useEffect(() => {
    fetch(data)
      .then((response) => response.json())
      .then((data) => setHomeData(data));
  }, []);

  return (
    <div className="w-full h-full relative">
      <Swiper
        direction={"vertical"}
        slidesPerView={"auto"}
        className="mySwiper h-screen w-full overflow-hidden relative 
        before:content-[''] before:w-full before:h-1/4 before:absolute before:top-0 before:left-0 before:z-10 before:opacity-95 before:bg-gradient-to-b  before:from-secondary before:to-transparent
        after:content-[''] after:w-full after:h-1/4 after:absolute after:bottom-0 after:left-0 after:z-10 after:opacity-95 after:bg-gradient-to-t after:from-secondary after:to-transparent
        "
      >
        {homeData.map((item, index) => (
          <SwiperSlide key={index} className="!h-44 flex items-center justify-center">
            <div className="relative flex flex-col items-center justify-center py-5 border-b border-b-textColor">
              <span className="text-textColor text-2xl text-center bg-white w-2/4">
                {item.text}
              </span>
              <span className="absolute -top-8 text-black font-semibold opacity-20 text-8xl -z-10">
                {index + 1 < 10 ? "0" + (index + 1) : index + 1}
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeSwiper;
