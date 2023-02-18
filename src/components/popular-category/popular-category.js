import React from "react";
import Image from "next/image";
import {
  Bag,
  Beauty,
  HedPhone,
  Home,
  IndustrialEquipment,
  Mobile,
  Stationery,
  SuperMarket,
  Toy,
  Commodity,
  Category,
} from "../../../public/images/popular-category";

const teampDataPopularCategory = [
  { title: "مد و پوشاک", image: Bag },
  { title: "موبایل", image: Mobile },
  { title: "کالای دیجیتال", image: HedPhone },
  { title: "لوارم تحریر", image: Stationery },
  { title: "تجهیزات صنعتی", image: IndustrialEquipment },
  { title: "سوپرمارکت", image: SuperMarket },
  { title: "اسباب بازی ", image: Toy },
  { title: "زیبایی و سلامت", image: Beauty },
  { title: "خانه و آشپزخانه", image: Home },
];

function PopularCategory() {
  const showCategory = teampDataPopularCategory?.map((item, index) => {
    return (
      <div
        key={`category${index}`}
        className={
          "w-[137px] flex flex-col items-center rounded-2xl bg-[#F2F2F2] py-2 px-5"
        }
      >
        <div className={"relative w-[98px] h-[98px]"}>
          <Image src={item.image} alt={item.title} />
        </div>
        <p className={"text-sm mt-1 font-bold"}>{item.title}</p>
      </div>
    );
  });
  return (
    <div className={"flex gap-x-4 mt-16"}>
      <div className={"w-[80%] flex flex-col"}>
        <div className={"flex items-center"}>
          <div
            className={
              "md:w-10 md:h-10 w-9 h-9 flex justify-center items-center rounded-full bg-[#F7F7F7]"
            }
          >
            <div className={"relative md:w-5 md:h-4 w-4 h-3.5"}>
              <Image src={Category} alt="category" />
            </div>
          </div>
          <p className={"md:mr-3 mr-0.5 font-black text-lg"}>
            دسته بندی های محبوب
          </p>
          <hr className={"w-[63%] md:mr-6 mr-2 border-[#FFE9EE] mx-6"} />
        </div>
        <div className={"flex flex-wrap gap-6 mt-8"}>{showCategory}</div>
      </div>
      <div className={"relative h-[368px]"}>
        <Image src={Commodity} alt="commodity" />
      </div>
    </div>
  );
}

export default PopularCategory;
