import Image from "next/image";
import React from "react";
import { SearchIcon, PlusCircleIcon } from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Header() {
  const { data: session } = useSession();
  console.log("session", session);
  return (
    <div className="shadow-sm border-b sticky top-0 bg-white z-35">
      <div className=" pl-2 flex items-center justify-between max-w-7xl mx-4 xl:mx-auto">
        <div className="cursor-pointer h-28 w-28 relative hidden lg:inline-grid">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png"
            layout="fill"
            className="object-contain"
          ></Image>
        </div>

        <div className="cursor-pointer h-24 w-10 relative  lg:hidden">
          <Image
            src="https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c521.png"
            layout="fill"
            className="object-contain"
          ></Image>
        </div>

        <div className="relative mt-1 ">
          <div className="absolute top-2">
            <SearchIcon className="h-5 text-gray-600 pl-2" />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-100 pl-8 border-gray-100 text-sm focus:ring-gray-100 focus:border-gray-100 rounded-md"
          />
        </div>

        <div className="flex items-center space-x-4">
          <HomeIcon className=" hidden md:inline-flex h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out" />
          {session ? (
            <>
              <PlusCircleIcon className="h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out" />
              <img
                src={session.user.image}
                alt="user-image"
                className="h-8 rounded-full cursor-pointer"
              ></img>
            </>
          ) : (
            <button onClick={signIn}>Sign In</button>
          )}
        </div>
      </div>
    </div>
  );
}
