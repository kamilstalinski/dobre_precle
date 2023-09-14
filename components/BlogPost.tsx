"use client";

import Image from "next/image";
import { BlogPostTestProps } from "@/types";

const BlogPost = ({ post }: BlogPostTestProps) => {
  return (
    <div
      key={post.index}
      className='w-full flex md:flex-col justify-center  gap-[5%] mb-12'
      data-aos={post.index % 2 === 1 ? "fade-right" : "fade-left"}>
      <div className='w-[40%] md:w-full min-h-[350px] relative mb-4'>
        <Image
          src={post.PostImage}
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
      <div className='w-1/2 md:w-full flex flex-col justify-between'>
        <div>
          <h2 className='text-text-color text-[50px] md:text-h1-mobile font-bold mb-4 leading-[55px]'>
            {post.PostTitle}
          </h2>
          <p className='md:text-p-mobile'>{post.PostText}</p>
        </div>
        <p className='text-[12px]  opacity-50 text-right'>
          Dodano: {post.PostDate}
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
