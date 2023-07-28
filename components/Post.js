import React from "react";
import {
  DotsHorizontalIcon,
  HeartIcon,
  ChatIcon,
  BookmarkIcon,
} from "@heroicons/react/outline";

export default function Post({ username, userImg, img, caption }) {
  return (
    <div className="my-5 border rounded-md">
      <div className="flex items-center p-5 pl-2 ">
        <img
          className="h-10 rounded-full p-[2px] bg-gradient-to-r from-yellow-500 via-red-600 to-purple-500 border-box "
          src={userImg}
          alt={username}
        />
        <p className="font-bold flex-1 pl-2">{username}</p>
        <DotsHorizontalIcon className="h-5" />
      </div>

      <img className="object-cover w-full" src={img} alt={username} />

      <div className="flex justify-between px-4 pt-3 pb-3">
        <div className="flex space-x-4">
          <HeartIcon className="btn" />
          <ChatIcon className="btn" />
        </div>
        <BookmarkIcon className="btn" />
      </div>
    </div>
  );
}
