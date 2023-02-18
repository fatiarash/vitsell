import React from "react";
import Image from "next/image";

function Discounts({ title, src }) {
  return (
    <div className={"flex items-center md:mt-16"}>
      <div
        className={
          "md:w-10 md:h-10 w-9 h-9 flex justify-center items-center rounded-full bg-[#F7F7F7]"
        }
      >
        <div className={"relative md:w-5 md:h-4 w-4 h-3.5"}>
          <Image src={src} alt={title} />
        </div>
      </div>
      <p className={"w-[25%] md:mr-3 mr-0.5 font-black text-lg"}>{title}</p>
      <hr className={"w-full md:mr-6 mr-2 border-[#FFE9EE] mx-6"} />
      <div className={"w-[12%] flex items-center gap-x-2.5"}>
        <p className={"text-[#4F4F4F] text-sm"}>مشاهده همه</p>
        <svg
          width="4"
          height="8"
          viewBox="0 0 4 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.00104027 4.0607C0.000786655 4.19051 0.0459949 4.31631 0.128818 4.41626L2.9066 7.74959C3.00089 7.86304 3.1364 7.93439 3.2833 7.94794C3.43021 7.96148 3.57648 7.91611 3.68993 7.82181C3.80338 7.72751 3.87473 7.59201 3.88827 7.4451C3.90182 7.2982 3.85645 7.15193 3.76215 7.03848L1.27326 4.0607L3.67326 1.08292C3.71941 1.0261 3.75387 0.960711 3.77467 0.890522C3.79546 0.820334 3.80218 0.746728 3.79444 0.673934C3.78669 0.601141 3.76464 0.530595 3.72954 0.466352C3.69445 0.40211 3.647 0.345437 3.58993 0.299591C3.53281 0.248713 3.46579 0.21018 3.39308 0.186406C3.32038 0.162633 3.24354 0.154131 3.1674 0.161433C3.09125 0.168735 3.01743 0.191682 2.95057 0.22884C2.8837 0.265997 2.82523 0.316563 2.77882 0.377369L0.0954848 3.7107C0.0257536 3.81353 -0.00749909 3.93676 0.00104027 4.0607V4.0607Z"
            fill="#4F4F4F"
          />
        </svg>
      </div>
    </div>
  );
}

export default Discounts;
