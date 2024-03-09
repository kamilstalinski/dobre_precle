import { links } from "@/constants";
import Link from "next/link";
import SocialMedia from "./SocialMedia";
import { MobileMenuProps } from "@/types";
import { useEffect } from "react";

const MobileMenu = ({ menuRef, isActive, handleActive }: MobileMenuProps) => {
  //   useEffect(() => {
  //     isActive
  //       ? (document.body.style.overflowY = "hidden")
  //       : (document.body.style.overflowY = "visible");
  //   }, [isActive]);

  return (
    <div
      ref={menuRef}
      className={`nav__mobilemenu z-[9999] w-4/6 h-[100dvh] bg-[#FBE8CF] absolute top-0 transition-[left] duration-500 ${
        isActive ? "left-0" : "-left-full"
      }`}>
      <div className='nav__links-mobile h-full px-4 pb-4 pt-[130px] flex flex-col justify-between'>
        <div>
          <ul className='text-[#971C25] mb-4'>
            {links.map((link, i) => (
              <li
                onClick={handleActive}
                key={i}
                className='nav__link mt-2 text-[18px]'>
                <Link href={link.href}>{link.title}</Link>
              </li>
            ))}
          </ul>
          <SocialMedia navbarLinks={false} />
        </div>
        <div className='flex flex-col mt-4 text-text-color text-[14px]'>
          <Link href='/polityka-prywatnosci'>Polityka Prywatności</Link>
          <Link href='/rodo'>Obowiązek informacyjny RODO</Link>
          <p className='mt-2 text-[12px]'>
            ©{new Date().getFullYear()} Dobre Precle
          </p>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
