"use client";
import DetailsSwiper from "@/components/swipers/DetailsSwiper";
import Image from "next/image";
import React, { useContext } from "react";
import { NewsContext } from "../layout";

const Page = () => {
  const { currentNews, pageNumber } = useContext(NewsContext);

  return (
    <div className="w-full h-screen flex overflow-hidden">
      <div className="w-full h-screen flex flex-col lg:flex-row  overflow-hidden">
        <div className="w-full h-auto xl:w-[500px] bg-white lg:flex lg:flex-col lg:items-start lg:justify-center space-y-3 border-r border-gray border-opacity-50">
          <DetailsSwiper data={currentNews} />
        </div>
        <div className="w-full h-screen xl:w-[calc(100%-500px)] flex-row bg-secondary font-poppins overflow-auto">
          <div>
            {currentNews
              .filter((item) => item.type != "ads")
              .filter((item) => item.id == pageNumber)
              .map((item, index) => (
                <div
                  key={index}
                  className="w-full h-full font-poppins xl:max-w-[1150px] flex flex-col m-auto p-4 xl:p-24 overflow-hidden"
                >
                  <div className="w-full xl:w-3/4 xl:pl-12 mb-5">
                    <h1 className="text-black font-extrabold sm:text-4xl text-2xl xl:text-4xl mb-5">
                      {item.title}
                    </h1>
                    <div className="text-textColor border-b border-gray border-dashed pb-5">
                      {item.content}
                    </div>
                  </div>
                  <div>
                    <Image
                      src={item.image}
                      width={1150}
                      height={500}
                      objectFit="cover"
                      alt={item.title}
                    />
                  </div>
                  <div className="bg-secondary -mt-10 w-[calc(100%-10px)] xl:w-[calc(100%-40px)] h-full p-3">
                    <p className="text-textColor pb-0 text-sm xl:text-base">
                      {item.contentDetails}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
