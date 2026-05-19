"use client";

import Image from "next/image";
import type { PostFields } from "@/types";

const BlogPost = ({ post }: { post: PostFields }) => {
  const { title, paragraph, media, date } = post;
  const imageUrl = media?.fields?.file?.url;

  const handleDate = (dateToFormat: string) => {
    const oldDate = new Date(dateToFormat);

    const day = String(oldDate.getDate()).padStart(2, "0");
    const month = String(oldDate.getMonth() + 1).padStart(2, "0");
    const year = oldDate.getFullYear();

    const formattedDate = `${day}-${month}-${year}`;

    return formattedDate;
  };

  return (
    <div
      className='w-full flex md:flex-col justify-center  gap-[5%] mb-12'
      data-aos='fade-left'
    >
      {imageUrl && (
        <div className='w-[40%] md:w-full min-h-[350px] relative mb-4'>
          <Image
            src={`https:${imageUrl}`}
            alt=''
            fill
            sizes='(max-width: 768px) 100vw, 40vw'
            className='object-cover object-center rounded-[15px]'
            style={{ maxHeight: "450px" }}
          />
        </div>
      )}
      <div
        className={`${
          imageUrl ? "w-1/2" : "w-full"
        } md:w-full flex flex-col justify-between`}
      >
        <div>
          <h2 className='text-text-color text-[50px] md:text-h1-mobile font-bold mb-4 leading-[55px]'>
            {title}
          </h2>
          <p className='md:text-p-mobile'>{paragraph}</p>
        </div>
        <p className='text-[12px]  opacity-50 text-right'>
          Dodano: {handleDate(date)}
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
