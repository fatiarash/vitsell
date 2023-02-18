import React from "react";
import Image from "next/image";
import {
  Logo,
  Call,
  Instagram,
  Map,
  Samandehi,
  Send,
  Union,
  Whatsapp,
  SendEmail,
} from "../../../public/images/footer";

function Footer() {
  return (
    <>
      <div className={"mt-40 flex gap-x-10"}>
        <div className={"basis-1/3"}>
          <div className={"relative flex w-28 h-28 cursor-pointer"}>
            <Image src={Logo} alt="logoFooter" />
          </div>
          <p className={"txt-md font-black mt-1 text-[#292929]"}>ویتسل</p>
          <p className={"flex flex-wrap w-11/12 mt-1 text-sm text-[#474747]"}>
            صرافی هفت ارز پلتفرم ایمن و سریع برای انجام معاملات ارز دیجیتال در
            بستری مطمئن
          </p>
        </div>
        <ul className={"basis-1/4"}>
          <li className={"text-md text-[#292929] font-black"}>ویستل</li>
          <ul className={"flex flex-col gap-3 mt-4"}>
            <li className={"text-sm text-[#4F4F4F] cursor-pointer"}>
              درباره ما
            </li>
            <li className={"text-sm text-[#4F4F4F] cursor-pointer"}>
              تماس با ما
            </li>
            <li className={"text-sm text-[#4F4F4F] cursor-pointer"}>
              حریم خصوصی
            </li>
            <li className={"text-sm text-[#4F4F4F] cursor-pointer"}>
              شرایط بازگشت کالا
            </li>
          </ul>
        </ul>
        <ul className={"basis-1/4"}>
          <li className={"text-md text-[#292929] font-black"}>محصولات ویتسل</li>
          <ul className={"flex flex-col gap-3 mt-4"}>
            <li className={"text-sm text-[#4F4F4F] cursor-pointer"}>
              کالای دیجیتال
            </li>
            <li className={"text-sm text-[#4F4F4F] cursor-pointer"}>
              سوپرمارکت
            </li>
            <li className={"text-sm text-[#4F4F4F] cursor-pointer"}>
              گوشی موبایل
            </li>
            <li className={"text-sm text-[#4F4F4F] cursor-pointer"}>
              ابزار الات
            </li>
            <li className={"text-sm text-[#4F4F4F] cursor-pointer"}>
              لوازم تحریر
            </li>
          </ul>
        </ul>
        <ul className={"basis-1/4"}>
          <li className={"text-md text-[#292929] font-black"}>
            ارتباط با ویتسل
          </li>
          <ul className={"flex flex-col gap-4 mt-5"}>
            <li className={"flex items-center gap-x-2.5 cursor-pointer"}>
              <div className={"relative flex w-[17px] h-[18px]"}>
                <Image src={Send} alt="send" />
              </div>
              <li className={"text-sm text-[#4F4F4F]"}>ٰvitdell@gmail.com</li>
            </li>
            <li className={"flex items-center gap-x-2 cursor-pointer"}>
              <div className={"relative flex w-5 h-5"}>
                <Image src={Call} alt="call" />
              </div>
              <li className={"text-sm text-[#4F4F4F]"}>۰۸۴۷۷۴۷۳۲۲</li>
            </li>
            <li className={"flex items-center gap-x-2 cursor-pointer"}>
              <div className={"relative flex w-5 h-5"}>
                <Image src={Map} alt="map" />
              </div>
              <li className={"text-sm text-[#4F4F4F]"}>
                خیابان ولی عصرنرسیده به سینما آفریقا
              </li>
            </li>
          </ul>
          <div className={"flex gap-x-3 mt-8"}>
            <div
              className={
                "w-10 h-10 flex items-center justify-center bg-[#F7F7F7] rounded-full cursor-pointer"
              }
            >
              <div className={"relative flex w-5 h-5"}>
                <Image src={Instagram} alt="instagram" />
              </div>
            </div>
            <div
              className={
                "w-10 h-10 flex items-center justify-center bg-[#F7F7F7] rounded-full cursor-pointer"
              }
            >
              <div className={"relative flex w-5 h-5"}>
                <Image src={SendEmail} alt="sendEmail" />
              </div>
            </div>
            <div
              className={
                "w-10 h-10 flex items-center justify-center bg-[#F7F7F7] rounded-full cursor-pointer"
              }
            >
              <div className={"relative flex w-5 h-5"}>
                <Image src={Whatsapp} alt="whatsapp" />
              </div>
            </div>
          </div>
        </ul>
        <div className={"flex flex-col gap-2"}>
          <div className={"relative flex w-[134px] h-[134px] cursor-pointer"}>
            <Image src={Samandehi} alt="samandehi" />
          </div>
          <div className={"relative flex w-[134px] h-[134px] cursor-pointer"}>
            <Image src={Union} alt="union" />
          </div>
        </div>
      </div>
      <hr className={"w-full border-[#AB8BD1] mt-7"} />
      <p className={"text-sm text-[#4F4F4F] mt-3"}>
        کلیه حقوق متعلق به شرکت ویستا است.{" "}
      </p>
    </>
  );
}

export default Footer;
