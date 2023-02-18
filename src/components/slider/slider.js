import React from "react";
import Image from "next/image";
import { Shoe } from "../../../public/images/slider";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Slider() {
  SwiperCore.use([Autoplay]);

  const teampDataSlider = [
    { price: "۴,۳۴۳,۰۰۰", image: Shoe },
    { price: "۴,۳۴۳,۰۰۰", image: Shoe },
    { price: "۴,۳۴۳,۰۰۰", image: Shoe },
    { price: "۴,۳۴۳,۰۰۰", image: Shoe },
    { price: "۴,۳۴۳,۰۰۰", image: Shoe },
    { price: "۴,۳۴۳,۰۰۰", image: Shoe },
    { price: "۴,۳۴۳,۰۰۰", image: Shoe },
    { price: "۴,۳۴۳,۰۰۰", image: Shoe },
  ];

  return (
    <div className={"bg-[#F7F7F7] rounded-3xl cursor-pointer"}>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={16}
        slidesPerView={6}
        navigation
        autoplay
        loopedSlides
      >
        <svg
          className={"absolute left-0 top-20"}
          width="34"
          height="93"
          viewBox="0 0 34 93"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M26.8665 32.428C17.9836 25.4576 7.38809 19.1824 0 0V92.5001C6.44522 75.6301 18.4051 68.889 28.0682 59.6002C32.0726 55.7509 34.0748 53.8263 33.6635 45.6325C33.2522 37.4388 31.1236 35.7685 26.8665 32.428Z"
            fill="white"
          />
        </svg>
        <svg
          className={"absolute right-0 top-20"}
          width="34"
          height="93"
          viewBox="0 0 34 93"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.1335 32.428C16.0164 25.4576 26.6119 19.1824 34 0V92.5001C27.5548 75.6301 15.5949 68.889 5.93182 59.6002C1.92739 55.7509 -0.0748253 53.8263 0.336487 45.6325C0.747799 37.4388 2.87637 35.7685 7.1335 32.428Z"
            fill="white"
          />
        </svg>
        {teampDataSlider?.map((item, index) => {
          return (
            <SwiperSlide key={`slider${index}`}>
              <div
                className={
                  "flex flex-col items-center justify-center p-4 w-[172px] m-4"
                }
              >
                <div className={"relative w-28 h-28"}>
                  <Image src={item.image} alt="shoe" />
                </div>
                <div
                  className={
                    "w-full flex items-center justify-end gap-x-0.5 mt-4"
                  }
                >
                  <p className={"text-[#333333] text-lg font-black"}>
                    {item.price}
                  </p>
                  <p className={"text-[#4F4F4F] text-xs"}>تومان</p>
                </div>
                <div
                  className={"w-full flex justify-between items-center gap-x-1"}
                >
                  <div className={"px-3 py-1 rounded-full bg-[#D72339]"}>
                    <p className={"text-white text-md font-bold"}>۳۴٪</p>
                  </div>
                  <p className={"line-through text-[#BDBDBD] text-md"}>
                    ۴,۳۴۳,۰۰۰
                  </p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Slider;
