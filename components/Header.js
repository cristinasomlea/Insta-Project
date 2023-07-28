import Image from "next/image";
import React from "react";
import { SearchIcon, PlusCircleIcon } from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";

export default function Header() {

  return (
    <div className="shadow-sm border-b sticky top-0 bg-white z-30">
    <div className=" pl-2 flex items-center justify-between max-w-6xl mx-4 xl:mx-auto">
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
          <SearchIcon className="h-5 text-gray-500 pl-2" />
        </div>
        <input
          type="text"
          placeholder="Search"
          className="bg-gray-50 pl-8 border-gray-500 text-sm focus:ring-black focus:border-black rounded-md"
        />
      </div>

      <div className="flex items-center space-x-4">
        <HomeIcon className=" hidden md:inline-flex h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out" />
        <PlusCircleIcon  className="h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out"/>
        <img src="https://cdn-icons-png.flaticon.com/256/5362/5362034.png" alt="user-image" className="h-10 rounded-full cursor-pointer"></img>
      </div>
    </div>
    </div>
  );
}
