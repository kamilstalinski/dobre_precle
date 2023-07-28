import Image from "next/image";
import Link from "next/link";
import SocialMedia from "./SocialMedia";

const Footer = () => {
  return (
    <div className='pt-[30px] md:pt-[15px]'>
      <div className='container mx-auto px-[4%] text-text-color'>
        <div className='relative w-[200px] h-[50px]'>
          <Image src='/logo-footer.svg' alt='logo' fill />
        </div>
        <div className='flex flex-wrap gap-4 justify-between text-[14px] md:text-[12px] w-4/5'>
          <p>
            DP 1 sp. z o. o.
            <br />
            ul.Szlachecka 24,
            <br />
            32-080 Brzezie
            <br />
            <br />
            NIP: 5130282896
            <br />
            KRS: 000100998
          </p>
          <div className='h-full'>
            <ul className=''>
              <li>
                <Link href='/'>AKTUALNOŚCI</Link>
              </li>
              <li>
                <Link href='/o-nas'>O NAS</Link>
              </li>
              <li>
                <Link href='menu'>MENU</Link>
              </li>
              <li>
                <Link href='lokalizacje'>LOKALIZACJE</Link>
              </li>
              <li>
                <Link href='kontakt'>KONTAKT</Link>
              </li>
            </ul>
          </div>
          <div>
            <p className='mb-2'>ŚLEDŹ NAS NA:</p>
            <SocialMedia alignItems='start' navbarLinks={false} />
          </div>
        </div>
      </div>
      <div className='w-full h-[300px] lg:h-[200px] sm:h-[150px] relative background-footer'>
        {/* <Image src='/footer.svg' alt='logo footer' fill /> */}
      </div>
    </div>
  );
};

export default Footer;
