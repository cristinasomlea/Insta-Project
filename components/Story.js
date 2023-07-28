import React from "react";

export default function Story({ img, username }) {
  return (
    <div>
        <img className="h-14 rounded-full p-[2px] bg-gradient-to-r from-yellow-500 via-red-600 to-purple-500 border-box cursor-pointer hover:scale-110 transition-transform duration-200 ease-out" src={img} alt={username} />
        <p className="text-xs w-14 truncate">{username}</p>
    </div>
  );
}
