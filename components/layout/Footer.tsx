import Image from "next/image";
import Link from "next/link";
import { SocialMedia } from "@/components";
import { links } from "@/constants";

const Footer = () => {
  return (
    <div className='pt-[30px] md:pt-[15px]'>
      <div className='container mx-auto px-[4%] text-text-color -mb-6'>
        <div className='relative w-[200px] h-[50px]'>
          <Image src='/logo-footer.svg' alt='logo' fill sizes='200px' />
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
            KRS: 0001009998
          </p>
          <div className='h-full'>
            <ul>
              {links.map((link, i) => (
                <li key={i}>
                  <Link href={link.href}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className='mb-2'>ŚLEDŹ NAS NA:</p>
            <SocialMedia navbarLinks={false} footerLinks={true} />
            <div className='flex flex-col mt-6'>
              <Link href='/polityka-prywatnosci'>Polityka Prywatności</Link>
              {/* <Link href='/rodo'>Obowiązek informacyjny RODO</Link> */}
            </div>
          </div>
        </div>
      </div>
      <div className='w-full h-[300px] lg:h-[200px] sm:h-[150px] relative background-footer -z-10'></div>
    </div>
  );
};

export default Footer;
