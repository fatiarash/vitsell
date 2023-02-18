import React from "react";
import Image from "next/image";
import {
  Lasting,
  MattePixels,
  Miracle,
} from "../../../public/images/best-seller";

function ImageDiscounts() {
  return (
    <div className={"flex gap-4 mt-16"}>
      <div className={"relative w-[592px] h-[394px]"}>
        <Image src={MattePixels} alt="sendEmail" />
      </div>
      <div className={"flex flex-col gap-4"}>
        <div className={"relative w-[592px] h-[189px]"}>
          <Image src={Lasting} alt="sendEmail" />
        </div>
        <div className={"relative w-[592px] h-[189px]"}>
          <Image src={Miracle} alt="sendEmail" />
        </div>
      </div>
    </div>
  );
}

export default ImageDiscounts;
