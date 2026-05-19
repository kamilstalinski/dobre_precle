"use client";

import Link from "next/link";
import Image from "next/image";
import { SocialMediaProps } from "@/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faSquareInstagram,
  faSquareYoutube,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

const SocialMedia = ({ navbarLinks, footerLinks }: SocialMediaProps) => {
  return (
    <div
      className={`${navbarLinks && "nav__social-links h-full items-end"} 
     flex gap-1`}
    >
      <Link
        className='nav__social-link text-text-color hover:text-[#ed8f28] transition-all max-h-[28px]'
        href='https://www.facebook.com/dobreprecle'
        target='_blank'
      >
        <FontAwesomeIcon
          className='w-[28px] h-[28px]'
          icon={faSquareFacebook}
        />
      </Link>
      <Link
        className='nav__social-link text-text-color hover:text-[#ed8f28] transition-all max-h-[28px]'
        href='https://www.instagram.com/dobreprecle/'
        target='_blank'
      >
        <FontAwesomeIcon
          className='w-[28px] h-[28px]'
          icon={faSquareInstagram}
        />
      </Link>
      <Link
        className='nav__social-link text-text-color hover:text-[#ed8f28] transition-all max-h-[28px]'
        href='https://www.youtube.com/@Dobre-Precle'
        target='_blank'
      >
        <FontAwesomeIcon className='w-[28px] h-[28px]' icon={faSquareYoutube} />
      </Link>
      <Link
        className='nav__social-link max-h-[28px]'
        href='https://www.tiktok.com/@dobre.precle'
        target='_blank'
      >
        <div
          className={`w-[24.5px] h-[24.5px] bg-text-color flex justify-center items-center ${
            footerLinks ? "translate-y-[1.4px]" : "-translate-y-[2px]"
          } rounded-[3px] hover:bg-[#ed8f28] transition-all`}
        >
          <FontAwesomeIcon
            className='w-[19px] h-[19px] p-[5.5px] text-white'
            icon={faTiktok}
          />
        </div>
      </Link>
    </div>
  );
};

export default SocialMedia;
