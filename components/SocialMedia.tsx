import Link from "next/link";
import Image from "next/image";
import { SocialMediaProps } from "@/types";

const SocialMedia = ({ alignItems, navbarLinks }: SocialMediaProps) => {
  return (
    <div
      className={`${navbarLinks ? "nav__social-links" : ""} h-full flex items-${
        alignItems ? alignItems : "end"
      } gap-2`}>
      <Link
        className='nav__social-link'
        href='https://www.facebook.com/dobreprecle'
        target='_blank'>
        <Image src='/FB_icon.svg' alt='Facebook logo' width={26} height={26} />
      </Link>
      <Link
        className='nav__social-link'
        href='https://www.instagram.com/dobreprecle/'
        target='_blank'>
        <Image src='/IG_icon.svg' alt='Facebook logo' width={26} height={26} />
      </Link>
    </div>
  );
};

export default SocialMedia;
