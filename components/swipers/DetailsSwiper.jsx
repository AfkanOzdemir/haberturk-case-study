"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import { useContext, useEffect, useRef } from "react";
import { NewsContext } from "@/app/(pages)/layout";

const DetailsSwiper = ({ data }) => {
  const { pageNumber, setPageNumber } = useContext(NewsContext);
  const swiperRef = useRef(null);
  useEffect(() => {
    swiperRef.current.swiper.slideTo(pageNumber - 2, 1000);
  }, [pageNumber, swiperRef]);
  return (
    <Swiper
      ref={swiperRef}
      direction={"horizontal"}
      slidesPerView={"auto"}
      mousewheel={true}
      modules={[Mousewheel]}
      breakpoints={{
        640: {
          direction: "horizontal",
          slidesPerView: "auto",
          spaceBetween: 0,
        },
        1024: {
          direction: "vertical",
          slidesPerView: "auto",
          spaceBetween: 0,
        },
      }}
    >
      {data
        .filter((item) => item.type != "ads")
        .map((item, index) => (
          <SwiperSlide key={index} className="!h-52 !w-[284px] lg:!w-full">
            <div
              onClick={() => setPageNumber(item.id)}
              className={`!h-full transition-all ease-in-out duration-300 ${pageNumber == item.id ? "bg-secondary" : "bg-white"} hover:bg-secondary cursor-pointer`}>
              <div className="w-full !h-full flex items-center justify-center space-x-4 font-poppins p-5 border border-gray border-opacity-50">
                <div className="relative space-x-4  h-full flex justify-center items-center ">
                  <Image
                    src={item.image}
                    width={200}
                    height={200}
                    alt={item.title}
                    className="object-cover object-center w-24 h-24 lg:w-60 lg:h-28 z-20"
                  />
                  <span className="absolute top-1 -left-7 lg:-top-4 lg:-left-4 text-6xl font-bold text-black opacity-10 z-10">
                    {index + 1 < 10 ? "0" + (index + 1) : index + 1}
                  </span>
                  <div className="flex lg:w-1/2 flex-col justify-start text-black  space-y-3 sm:space-y-5">
                    <div className="font-bold text-sm lg:text-[1.1rem] ">
                      {item.title}
                    </div>
                    <div className="text-sm">{item.hour} Saat Önce</div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default DetailsSwiper;
