"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Lato } from "next/font/google";
import { Hamburger, SocialMedia } from "@/components";
import { links } from "@/constants";

const lato = Lato({ weight: ["400", "700"], subsets: ["latin"] });

const Navbar = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [prevScrollPos, setPrevScrollPos] = useState<number>(0);
  const [visible, setVisible] = useState<boolean>(true);

  const menuRef = useRef<HTMLDivElement>(null);

  const handleActive = () => {
    setIsActive((prevActive) => !prevActive);
  };

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > prevScrollPos) {
      setVisible(false);
    } else {
      setVisible(true);
    }

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    const handleMenuClick = (e: MouseEvent) => {
      if (
        isActive &&
        menuRef.current &&
        !menuRef.current.contains(e.target as Node)
      ) {
        handleActive();
      }
    };

    document.addEventListener("click", handleMenuClick);

    return () => {
      document.removeEventListener("click", handleMenuClick);
    };
  });

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  useEffect(() => {
    isActive
      ? (document.body.style.overflowY = "hidden")
      : (document.body.style.overflowY = "visible");
  }, [isActive]);

  return (
    <div
      className={`bg-white sticky z-50 shadow-lg shadow-slate-500/40 ${
        visible ? "top-0" : "-top-[100%]"
      } transition-all duration-500`}>
      <nav
        className={`${lato.className} container mx-auto h-28 md:h-20 w-full flex justify-between items-center px-[4%] md:px-[2%] pb-4 md:pb-0`}>
        <div className='nav__logo h-full flex items-end md:items-center relative'>
          <Link
            className='image__container relative w-[210px] h-[83px] md:w-[122px] md:h-[48px] z-[99999]'
            href='/'>
            <Image src='/logo.svg' alt='Dobre Precle logo' fill />
          </Link>
        </div>
        <div className='nav__links h-full'>
          <ul className='h-full flex gap-8 lg:gap-4 items-end text-[#971C25] font-bold'>
            {links.map((link, i) => (
              <li key={i} className='nav__link'>
                <Link href={link.href}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <SocialMedia navbarLinks={true} />
        <Hamburger isActive={isActive} handleActive={handleActive} />
        <div
          ref={menuRef}
          className={`nav__mobilemenu z-[9999] w-4/6 h-screen bg-[#FBE8CF] absolute top-0 transition-[left] duration-500 ${
            isActive ? "left-0" : "-left-full"
          }`}>
          <div className='nav__links-mobile px-4 pt-[130px]'>
            <ul className='text-[#971C25]'>
              {links.map((link, i) => (
                <li
                  onClick={handleActive}
                  key={i}
                  className='nav__link mt-2 text-[18px]'>
                  <Link href={link.href}>{link.title}</Link>
                </li>
              ))}
            </ul>
            <SocialMedia alignItems='end' navbarLinks={true} />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
