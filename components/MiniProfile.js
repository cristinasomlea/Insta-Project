import React from "react";

export default function MiniProfile() {
  return (
    <div className="flex item-center justify-between mt-5 ml-8">
      <img
        className="h-16 rounded-full border p-[2px]"
        src="https://cdn-icons-png.flaticon.com/256/5362/5362034.png"
        alt="user-image"
      />
      <div className="flex-1 ml-4">
        <h2 className="font-bold">cristina.somlea</h2>
        <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
      </div>
      <button className="font-semibold text-blue-400 text-sm">Sign Out</button>
    </div>
  );
}
