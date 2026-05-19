"use client";

import Link from "next/link";
import { SocialMediaProps } from "@/types";

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox='0 0 448 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
    <path d='M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z' />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox='0 0 448 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
    <path d='M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM224 374a118 118 0 1 1 0-236 118 118 0 0 1 0 236zm146.4-228.5a27.9 27.9 0 1 1 0-55.8 27.9 27.9 0 0 1 0 55.8zM224 184a72 72 0 1 0 0 144 72 72 0 0 0 0-144z' />
  </svg>
);

const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox='0 0 448 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
    <path d='M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-16.1 230.2c0 35.9-4.5 71.8-4.5 71.8s-4.4 30.6-17.9 44c-17.1 17.9-36.3 18-45.1 19.1-63 4.6-157.5 4.7-157.5 4.7s-117-1.1-153-4.5c-10-1.9-32.5-1.4-49.7-19.4-13.5-13.5-17.9-44-17.9-44s-4.5-35.9-4.5-71.8v-33.6c0-35.9 4.5-71.8 4.5-71.8s4.4-30.6 17.9-44c17.1-17.9 36.3-18 45.1-19.1 63-4.6 157.4-4.6 157.4-4.6h.2s94.4 0 157.4 4.6c8.8 1.1 28 1.2 45.1 19.1 13.5 13.5 17.9 44 17.9 44s4.5 35.9 4.5 71.8v33.6zM182 286.2l121.5-62.9-121.5-63.3v126.2z' />
  </svg>
);

const TiktokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox='0 0 448 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
    <path d='M448 209.91a210.06 210.06 0 0 1-122.77-39.25v178.72A162.55 162.55 0 1 1 185 188.31v89.89a74.62 74.62 0 1 0 52.23 71.18V0h88a121.18 121.18 0 0 0 1.86 22.17A122.18 122.18 0 0 0 381 102.39a121.43 121.43 0 0 0 67 20.14z' />
  </svg>
);

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
        <FacebookIcon className='w-[28px] h-[28px]' />
      </Link>
      <Link
        className='nav__social-link text-text-color hover:text-[#ed8f28] transition-all max-h-[28px]'
        href='https://www.instagram.com/dobreprecle/'
        target='_blank'
      >
        <InstagramIcon className='w-[28px] h-[28px]' />
      </Link>
      <Link
        className='nav__social-link text-text-color hover:text-[#ed8f28] transition-all max-h-[28px]'
        href='https://www.youtube.com/@Dobre-Precle'
        target='_blank'
      >
        <YoutubeIcon className='w-[28px] h-[28px]' />
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
          <TiktokIcon className='w-[19px] h-[19px] text-white' />
        </div>
      </Link>
    </div>
  );
};

export default SocialMedia;
