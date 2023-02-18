import React from "react";
import Image from "next/image";
import { Timer } from "../../../../public/images/slider";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const teampDataSlider = [
  { image: Timer },
  { image: Timer },
  { image: Timer },
  { image: Timer },
  { image: Timer },
  { image: Timer },
];

function TopSliderLeft() {
  return (
    <div className={"w-[25%] rounded-3xl cursor-pointer"}>
      <Swiper
        className="swip"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={1}
        navigation
        loopedSlides
      >
        {teampDataSlider?.map((item, index) => {
          return (
            <SwiperSlide key={`sliderLeft${index}`}>
              <div className={"relative h-[373px]"}>
                <Image src={item.image} alt="timer" />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default TopSliderLeft;
