import React from "react";
import Image from "next/image";
import {
  Logo,
  Arrow,
  BestSeller,
  Category,
  Search,
  ShoppingCart,
  TicketDiscount,
} from "../../../../public/images/header-image";

function Header() {
  return (
    <div className={"flex rounded-full shadow-xl md:px-6 md:py-5"}>
      <div className={"flex basis-1/2 items-center gap-x-6"}>
        <div className={"relative w-10 h-10"}>
          <Image src={Logo} alt="logo" />
        </div>
        <div className={"flex items-center"}>
          <div className={"relative w-[18px] h-[18px]"}>
            <Image src={Category} alt="category" />
          </div>
          <p className={"mr-1 text-sm text-[#4F4F4F]"}>دسته بندی ها</p>
          <div className={"relative w-[7px] mr-2"}>
            <Image src={Arrow} alt="arrow" />
          </div>
        </div>
        <div className={"flex items-center"}>
          <div className={"relative w-[15px] h-5"}>
            <Image src={BestSeller} alt="bestSeller" />
          </div>
          <p className={"mr-1 text-sm text-[#4F4F4F]"}>پر فروش ترین ها</p>
        </div>
        <div className={"flex items-center"}>
          <div className={"relative w-[17px] h-3.5"}>
            <Image src={TicketDiscount} alt="ticketDiscount" />
          </div>
          <p className={"mr-1 ext-sm text-[#4F4F4F]"}>تخفیف دار ها</p>
        </div>
      </div>

      <div className={"flex basis-1/2 gap-2 justify-end"}>
        <div
          className={
            "w-2/6 px-3 flex items-center justify-between bg-[#F7F7F7] rounded-full"
          }
        >
          <input
            className={
              "bg-[#F7F7F7] text-black w-11/12 focus:outline-non focus:ring-0"
            }
            type={"text"}
            placeholder={"جستجوی محصولات..."}
          />
          <div className={"relative w-[17px] h-[17px]"}>
            <Image src={Search} alt="search" />
          </div>
        </div>
        <div
          className={
            "flex items-center justify-center bg-[#F7F7F7] rounded-full w-12 h-12"
          }
        >
          <div className={"relative w-5 h-4"}>
            <Image src={ShoppingCart} alt="shoppingCart" />
          </div>
        </div>
        <button
          className={
            "flex items-center justify-center gap-0.5 cursore-pointer rounded-full bg-[#D72339] py-3 px-6"
          }
        >
          <p className={"text-white text-sm"}>ورود</p>
          <p className={"text-white text-sm"}>/</p>
          <p className={"text-white text-sm"}>ثبت نام</p>
        </button>
      </div>
    </div>
  );
}

export default Header;
