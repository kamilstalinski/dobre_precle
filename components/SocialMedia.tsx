import Link from "next/link";
import Image from "next/image";
import { SocialMediaProps } from "@/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";

const SocialMedia = ({ alignItems, navbarLinks }: SocialMediaProps) => {
  return (
    <div
      className={`${navbarLinks ? "nav__social-links" : ""} h-full flex items-${
        alignItems ? alignItems : "end"
      } gap-2`}>
      <Link
        className='nav__social-link text-text-color hover:text-[#ed8f28] transition-all'
        href='https://www.facebook.com/dobreprecle'
        target='_blank'>
        <FontAwesomeIcon className='fa-2x' icon={faSquareFacebook} />
      </Link>
      <Link
        className='nav__social-link text-text-color hover:text-[#ed8f28] transition-all'
        href='https://www.instagram.com/dobreprecle/'
        target='_blank'>
        <FontAwesomeIcon className='fa-2x' icon={faSquareInstagram} />
      </Link>
    </div>
  );
};

export default SocialMedia;
