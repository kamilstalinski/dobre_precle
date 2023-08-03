"use client";

import Image from "next/image";
import { PostProps } from "@/types";

const BlogPost = ({ id, attributes }: PostProps) => {
  return (
    <div className='w-full flex justify-center gap-[5%] mb-8'>
      <div className='w-[40%] min-h-[350px] relative'>
        <Image
          src={`http://localhost:1337${attributes.PostImage.data.attributes.url}`}
          alt=''
          fill
          style={{
            maxHeight: "450px",
            objectFit: "cover",
            objectPosition: "center",
            borderRadius: "15px",
          }}
        />
      </div>
      <div className='w-2/6'>
        <h2 className='text-text-color text-[50px] md:text-h2-mobile font-bold mb-4 leading-[55px]'>
          {attributes.PostTitle}
        </h2>
        <p>{attributes.PostText}</p>
      </div>
    </div>
  );
};

export default BlogPost;
