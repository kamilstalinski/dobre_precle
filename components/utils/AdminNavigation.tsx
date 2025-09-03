import Link from "next/link";
import React from "react";
import { BackToHome } from "@/components";

export default function AdminNavigation() {
  return (
    <div className='mt-6 w-full flex justify-between'>
      <div className='flex gap-2'>
        <Link href='/admin/blog'>Blog</Link>
        <Link href='/admin/lokalizacje'>Lokalizacje</Link>
        <Link href='/admin/karuzela'>Karuzela</Link>
      </div>
      <div>
        <BackToHome />
      </div>
    </div>
  );
}
