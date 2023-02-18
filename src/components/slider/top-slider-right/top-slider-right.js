import React from "react";
import Image from "next/image";
import { Slider } from "../../../../public/images/slider";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

SwiperCore.use([Autoplay]);

const teampDataSlider = [
  { image: Slider },
  { image: Slider },
  { image: Slider },
  { image: Slider },
  { image: Slider },
  { image: Slider },
];

function TopSliderRight() {
  return (
    <div className={"w-[75%] rounded-3xl cursor-pointer"}>
      <Swiper className="wrappperSwips" slidesPerView={1} autoplay loopedSlides>
        {teampDataSlider?.map((item, index) => {
          return (
            <SwiperSlide key={`slderRight${index}`}>
              <div className={"relative "}>
                <Image src={item.image} alt="slider" />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default TopSliderRight;
