"use client";
import React, { useContext } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { NewsContext } from "@/app/(pages)/layout";
import NewsBox from "../NewsBox";

const NewsSwiper = () => {
  const { currentNews } = useContext(NewsContext);
  let newsCounter = 0;
  return (
    <Swiper slidesPerView={"auto"} className="mySwiper h-screen">
      <SwiperSlide className="!w-[calc(320px-4rem)] md:!w-[360px] h-full lg:!hidden !flex items-center justify-center">
        <div className="w-full h-full bg-white flex flex-col items-start justify-center px-5 relative space-y-3 border-r border-gray border-opacity-50">
          <span className="text-black text-base md:text-2xl font-abril font-semibold text-start opacity-50">
            {new Date().toLocaleDateString()}
          </span>
          <h1 className="w-full text-black font-abril text-3xl md:text-6xl font-black text-start">
            Bugün ne oldu?
          </h1>
          <p className="text-gray text-base md:text-lg text-start">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <div className="w-3/4 absolute bottom-10 text-gray text-sm md:text-base ">
            Copyright © 2017 - Tüm hakları saklıdır. Habertürk Gazetecilik A.Ş.
          </div>
        </div>
      </SwiperSlide>
      {currentNews &&
        currentNews.map((item, index) => (
          <SwiperSlide
            key={index}
            className="!w-[calc(320px-4rem)] md:!w-[360px] h-full"
          >
            <div className="w-full h-full p-5 border-r border-gray border-opacity-50 text-black transition-all ease-in-out duration-300 bg-white hover:bg-secondary flex items-center justify-center">
              <div className="absolute top-10 left-10 font-bold font-poppins text-5xl text-gray opacity-50">
                {
                  item.type === "ads" ? "Reklam" : (newsCounter + 1 < 10 ? "0" : "") + (++newsCounter)
                }
              </div>

              {item.type === "ads" ? (
                <Image
                  src={item.image}
                  alt="logo"
                  width={360}
                  height={200}
                  layout="responsive"
                  objectFit="cover"
                />
              ) : (
                <NewsBox item={item} index={index} />
              )}
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default NewsSwiper;
