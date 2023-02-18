import React from "react";
import Header from "./header/header-desktop/header";
import Advertising from "./advertising/advertising";
import Slider from "./slider/slider";
import Discounts from "./discounts/discounts";
import DoownloadVistell from "./download-vitsell/download-vitsell";
import Footer from "./footer/footer";
import { TicketDiscount, Fire, MagicStar } from "../../public/images/discounts";
import ImageDiscounts from "./image-discounts/image-discounts";
import TopSliderRight from "./slider/top-slider-right/top-slider-right";
import TopSliderLeft from "./slider/top-slider-left/top-slider-left";
import PopularCategory from "./popular-category/popular-category";
import AmazingOffers from "./amazing-offers/amazing-offers";

function HomePage() {
  return (
    <div className={"w-full md:px-[120px] md:pt-8 md:pb-5 px-4 pb-4 pt-3"}>
      <Header />
      <p>hhgfvhgfhgf</p>
      <div className="w-full flex gap-x-4 my-4">
        <TopSliderRight />
        <TopSliderLeft />
      </div>
      <Advertising />
      <Discounts src={TicketDiscount} title={"تخفیف های ویتسل "} />
      <div className={"mt-8"}>
        <Slider />
      </div>
      <div className={"mt-16"}>
        <Advertising />
      </div>
      <PopularCategory />
      <Discounts src={Fire} title={"پیشنهادات شگفت انگیر"} />
      <AmazingOffers />
      <Discounts src={MagicStar} title={"پرفروش ترین محصولات"} />
      <div className={"mt-8"}>
        <Slider />
      </div>
      <ImageDiscounts />
      <DoownloadVistell />
      <Footer />
    </div>
  );
}

export default HomePage;
