import React from "react";
import Image from "next/image";
import {
  Android,
  Bazar,
  Mobile,
  MyKet,
} from "../../../public/images/download-vistell";

function DownloadVitsell() {
  return (
    <div
      className={
        "w-[70%] flex justify-between my-0 mx-auto relative rounded-3xl bg-[#CE273B] mt-40 pr-8"
      }
    >
      <div className={"mt-8"}>
        <p className={"font-black text-white text-lg"}>
          ویتسل را همیشه همراه داشته باشید!
        </p>
        <div className={"flex gap-x-3 mt-4 mb-8"}>
          <button
            className={
              "flex justify-center items-center rounded-3xl bg-black px-4 py-3 gap-x-2 bg-opacity"
            }
          >
            <div className={"relative w-6 h-6"}>
              <Image src={Bazar} alt="bazar" />
            </div>
            <p className={"text-sm text-white font-bold	"}>دانلود از بازار</p>
          </button>
          <button
            className={
              "flex justify-center items-center rounded-3xl bg-black px-4 py-3 gap-x-2 bg-opacity"
            }
          >
            <div className={"relative w-6 h-6"}>
              <Image src={MyKet} alt="myKet" />
            </div>
            <p className={"text-sm text-white font-bold	"}>دانلود از مایکت</p>
          </button>
          <button
            className={
              "flex justify-center items-center rounded-3xl bg-black px-4 py-3 gap-x-2 from-white	bg-opacity"
            }
          >
            <div className={"relative w-6 h-6"}>
              <Image src={Android} alt="android" />
            </div>
            <p className={"text-sm text-white font-bold"}>دانلود مستقیم</p>
          </button>
        </div>
      </div>
      <div className={"absolute bottom-0 left-16"}>
        <div className={"relative w-[230px] h-[277px]"}>
          <Image src={Mobile} alt="mobile" />
        </div>
      </div>
    </div>
  );
}

export default DownloadVitsell;
