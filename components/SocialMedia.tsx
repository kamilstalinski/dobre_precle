import Link from "next/link";
import { SocialMediaProps } from "@/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";

const SocialMedia = ({ navbarLinks }: SocialMediaProps) => {
  return (
    <div
      className={`${navbarLinks && "nav__social-links h-full items-end"} 
     flex gap-2`}>
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
