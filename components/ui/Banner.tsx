import { BannerProps } from "@/types";
import Image from "next/image";

const Banner = ({ path, altName, children }: BannerProps) => {
  return (
    <div className='relative before:block before:bg-[#00000066] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:z-10 w-full h-[27rem] md:h-[15rem] flex items-center justify-center'>
      <Image
        src={path}
        alt={altName}
        sizes='100vw'
        fill
        className='object-cover z-[9]'
        priority
      />
      <h1 className='text-h1 lg:text-h1-tablet md:text-h1-mobile text-[#FBE8CF] text-center font-bold leading-tight z-20'>
        {children}
      </h1>
    </div>
  );
};

export default Banner;
