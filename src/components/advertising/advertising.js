import React from "react";
import Image from "next/image";
import {
  AdvertisingOne,
  AdvertisingTow,
} from "../../../public/images/advertising";

function Advertising() {
  return (
    <div className={"w-full flex md:gap-x-4 gap-x-2"}>
      <div className={"relative flex w-1/2"}>
        <Image src={AdvertisingOne} alt="advertisingOne" />
      </div>
      <div className={"relative flex w-1/2"}>
        <Image src={AdvertisingTow} alt="advertisingTow" />
      </div>
    </div>
  );
}

export default Advertising;
