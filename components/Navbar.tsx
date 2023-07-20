import Image from "next/image";
import Link from "next/link";
import { Lato } from "next/font/google";

const lato = Lato({ weight: ["400", "700"], subsets: ["latin"] });

const Navbar = () => {
  return (
    <nav
      className={`${lato.className} container mx-auto h-32 w-full flex justify-between items-center px-14 pb-3`}>
      <div className='nav__logo h-full flex items-end relative'>
        <Image
          src='/Dobre_Precle_logo_2@2x.png'
          alt='Dobre Precle logo'
          width={230}
          height={90}
        />
      </div>
      <div className='nav__links h-full'>
        <ul className='h-full flex gap-11 lg:gap-6 items-end text-[#971C25] font-bold'>
          <li className='nav__link'>
            <Link href=''>AKTUALNOŚCI</Link>
          </li>
          <li className='nav__link'>
            <Link href=''>O NAS</Link>
          </li>
          <li className='nav__link'>
            <Link href=''>MENU</Link>
          </li>
          <li className='nav__link'>
            <Link href=''>LOKALIZACJE</Link>
          </li>
          <li className='nav__link'>
            <Link href=''>KONTAKT</Link>
          </li>
        </ul>
      </div>
      <div className='nav__social-links h-full flex items-end gap-2'>
        <Link className='nav__social-link' href=''>
          <Image
            src='/FB_icon.svg'
            alt='Facebook logo'
            width={26}
            height={26}
          />
        </Link>
        <Link className='nav__social-link' href=''>
          <Image
            src='/IG_icon.svg'
            alt='Facebook logo'
            width={26}
            height={26}
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
