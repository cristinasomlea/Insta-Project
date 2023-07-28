import Image from "next/image";
import React from "react";
import { SearchIcon } from "@heroicons/react/outline";

export default function Header() {
  return (
    <div className=" pl-2 flex items-center justify-between max-w-6xl">
      <div className="cursor-pointer h-24 w-24 relative hidden lg:inline-grid">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png"
          layout="fill"
          className="object-contain"
        ></Image>
      </div>

      <div className="cursor-pointer h-24 w-10 relative  lg:hidden">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/800px-Instagram-Icon.png"
          layout="fill"
          className="object-contain"
        ></Image>
      </div>

      <div className="relative mt-1">
        <div className="absolute top-2">
          <SearchIcon className="h-5 text-gray-500 pl-2"></SearchIcon>
        </div>
        <input type="text" placeholder="Search" className="bg-gray-50 pl-8 border-gray-500 text-sm focus:ring-black focus:border-black rounded-md"/>
      </div>

      <div>
        <h1>Right Side</h1>
      </div>
    </div>
  );
}
