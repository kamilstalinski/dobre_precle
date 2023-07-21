"use client";

import Image from "next/image";
import { HamburgerProps } from "@/types";

const Hamburger = ({ isActive, handleActive }: HamburgerProps) => {
  return (
    <div
      onClick={handleActive}
      className='nav__hamburger w-[35px] h-[35px] flex-col justify-center relative cursor-pointer'>
      <Image
        src={isActive ? "/xmark-solid.svg" : "/bars-solid.svg"}
        alt='bars'
        fill></Image>
    </div>
  );
};

export default Hamburger;
