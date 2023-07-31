import React from "react";
import { PlusIcon } from "@heroicons/react/outline";

export default function Story({ img, username, isUser }) {
  return (
    <div className="relative group cursor-pointer">
        <img className="h-14 rounded-full p-[2px] bg-gradient-to-r from-yellow-500 via-red-600 to-purple-500 border-box group-hover:scale-110 transition-transform duration-200 ease-out" src={img} alt={username} />
       {isUser && <PlusIcon className="text-white h-6 absolute top-4 left-4 "/>}
        <p className="text-xs w-14 truncate">{username}</p>
    </div>
  );
}
