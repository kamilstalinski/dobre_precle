"use client";

import Image from "next/image";
import Link from "next/link";
import { Lato } from "next/font/google";
import { Hamburger } from "@/components";
import { useState } from "react";

const lato = Lato({ weight: ["400", "700"], subsets: ["latin"] });

const Navbar = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleActive = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <nav
      className={`${lato.className} container mx-auto h-32 w-full flex justify-between items-center px-4 pb-4`}>
      <div className='nav__logo h-full flex items-end md:items-center relative'>
        <Link href='/'>
          <div className='image__container relative w-[210px] h-[83px] md:w-[122px] md:h-[48px] z-50'>
            <Image
              src='/Dobre_precle_logo_2.svg'
              alt='Dobre Precle logo'
              fill
            />
          </div>
        </Link>
      </div>
      <div className='nav__links h-full'>
        <ul className='h-full flex gap-11 lg:gap-6 items-end text-[#971C25] font-bold'>
          <li className='nav__link'>
            <Link href='/'>AKTUALNOŚCI</Link>
          </li>
          <li className='nav__link'>
            <Link href='/o-nas'>O NAS</Link>
          </li>
          <li className='nav__link'>
            <Link href='menu'>MENU</Link>
          </li>
          <li className='nav__link'>
            <Link href='lokalizacje'>LOKALIZACJE</Link>
          </li>
          <li className='nav__link'>
            <Link href='kontakt'>KONTAKT</Link>
          </li>
        </ul>
      </div>
      <div className='nav__social-links h-full flex items-end gap-2'>
        <Link
          className='nav__social-link'
          href='https://www.facebook.com/dobreprecle'
          target='_blank'>
          <Image
            src='/FB_icon.svg'
            alt='Facebook logo'
            width={26}
            height={26}
          />
        </Link>
        <Link
          className='nav__social-link'
          href='https://www.instagram.com/dobreprecle/'
          target='_blank'>
          <Image
            src='/IG_icon.svg'
            alt='Facebook logo'
            width={26}
            height={26}
          />
        </Link>
      </div>
      <Hamburger isActive={isActive} handleActive={handleActive} />
      <div
        className={`nav__mobilemenu w-3/4 h-screen bg-[#FBE8CF] absolute top-0 transition-all duration-300 ${
          isActive ? "left-0" : "-left-full"
        }`}>
        <div className='nav__links-mobile px-4 pt-[130px] text-lg'>
          <ul className='text-[#971C25]'>
            <li className='nav__link mt-2'>
              <Link href='/'>AKTUALNOŚCI</Link>
            </li>
            <li className='nav__link mt-2'>
              <Link href='/o-nas'>O NAS</Link>
            </li>
            <li className='nav__link mt-2'>
              <Link href='menu'>MENU</Link>
            </li>
            <li className='nav__link mt-2'>
              <Link href='lokalizacje'>LOKALIZACJE</Link>
            </li>
            <li className='nav__link mt-2'>
              <Link href='kontakt'>KONTAKT</Link>
            </li>
          </ul>
          <div className='nav__mobile-links h-full flex items-end gap-2 mt-8'>
            <Link
              className='nav__social-link'
              href='https://www.facebook.com/dobreprecle'
              target='_blank'>
              <Image
                src='/FB_icon.svg'
                alt='Facebook logo'
                width={26}
                height={26}
              />
            </Link>
            <Link
              className='nav__social-link'
              href='https://www.instagram.com/dobreprecle/'
              target='_blank'>
              <Image
                src='/IG_icon.svg'
                alt='Facebook logo'
                width={26}
                height={26}
              />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
