import React from "react";
import Image from "next/image";
import {
  Airpoad,
  FireAmazing,
  TimerAmazing,
} from "../../../public/images/amazing-offers";

const teampDataAmazing = [
  {
    title: "کتونی نایک شماره ۱۲۱",
    price: "۴,۳۴۳,۰۰۰",
    oldPrice: "۴,۳۴۳,۰۰۰",
    image: Airpoad,
  },
  {
    title: "کتونی نایک شماره ۱۲۱",
    price: "۴,۳۴۳,۰۰۰",
    oldPrice: "۴,۳۴۳,۰۰۰",
    image: Airpoad,
  },
  {
    title: "کتونی نایک شماره ۱۲۱",
    price: "۴,۳۴۳,۰۰۰",
    oldPrice: "۴,۳۴۳,۰۰۰",
    image: Airpoad,
  },
  {
    title: "کتونی نایک شماره ۱۲۱",
    price: "۴,۳۴۳,۰۰۰",
    oldPrice: "۴,۳۴۳,۰۰۰",
    image: Airpoad,
  },
  {
    title: "کتونی نایک شماره ۱۲۱",
    price: "۴,۳۴۳,۰۰۰",
    oldPrice: "۴,۳۴۳,۰۰۰",
    image: Airpoad,
  },
  {
    title: "کتونی نایک شماره ۱۲۱",
    price: "۴,۳۴۳,۰۰۰",
    oldPrice: "۴,۳۴۳,۰۰۰",
    image: Airpoad,
  },
  {
    title: "کتونی نایک شماره ۱۲۱",
    price: "۴,۳۴۳,۰۰۰",
    oldPrice: "۴,۳۴۳,۰۰۰",
    image: Airpoad,
  },
  {
    title: "کتونی نایک شماره ۱۲۱",
    price: "۴,۳۴۳,۰۰۰",
    oldPrice: "۴,۳۴۳,۰۰۰",
    image: Airpoad,
  },
  {
    title: "کتونی نایک شماره ۱۲۱",
    price: "۴,۳۴۳,۰۰۰",
    oldPrice: "۴,۳۴۳,۰۰۰",
    image: Airpoad,
  },
];

function AmazingOffers() {
  const amazing = teampDataAmazing?.map((item, index) => {
    return (
      <div
        key={`amazing${index}`}
        className={"flex w-[274px] px-3 rounded-3xl pb-3 bg-[#F7F7F7]"}
      >
        <div className={"relative"}>
          <Image src={Airpoad} alt={"airpoad"} />
        </div>
        <div className={"flex flex-col items-end"}>
          <div className={"flex items-center gap-x-2.5"}>
            <p className={"text-[#333333] text-sm font-bold"}>
              کتونی نایک شماره ۱۲۱
            </p>
            <div className={"relative left-0 w-7 h-9"}>
              <Image src={FireAmazing} alt={"fireAmazing"} />
            </div>
          </div>
          <div className={"flex items-center mt-1.5 gap-x-0.5"}>
            <p className={"text-huge font-black text-[#333333]"}>۴,۳۴۳,۰۰۰</p>
            <p className={"text-xs text-[#4F4F4F]"}>تومان</p>
          </div>
          <div className={"w-full flex justify-between items-center gap-x-1"}>
            <div className={"px-3 py-1 rounded-full bg-[#D72339]"}>
              <p className={"text-white text-md font-bold"}>۳۴٪</p>
            </div>
            <p className={"line-through text-[#BDBDBD] text-md"}>۴,۳۴۳,۰۰۰</p>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="flex items-center mt-8 gap-6">
      <div
        className={
          "w-[282px] flex flex-col items-center rounded-3xl bg-[#F7F7F7] px-4 pb-4"
        }
      >
        <div className={"w-full flex justify-end"}>
          <div className={"relative left-0 w-7 h-9"}>
            <Image src={FireAmazing} alt={"fireAmazing"} />
          </div>
        </div>
        <div className={"relative left-0 w-52 h-52"}>
          <Image src={TimerAmazing} alt={"timerAmazing"} />
        </div>
        <p className={"flex w-full mt-5 text-[#282828] text-md font-black"}>
          همزن برقی Sanford
        </p>
        <div className={"flex w-full justify-end items-center mt-14 gap-x-0.5"}>
          <p className={"text-huge font-black text-[#333333]"}>۴,۳۴۳,۰۰۰</p>
          <p className={"text-xs text-[#4F4F4F]"}>تومان</p>
        </div>
      </div>
      <div className={"flex flex-wrap gap-6"}>{amazing}</div>
    </div>
  );
}

export default AmazingOffers;
