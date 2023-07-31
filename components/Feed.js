import React from "react";
import Stories from "./Stories";
import Posts from "./Posts";
import MiniProfile from "./MiniProfile";
import Suggestion from "./Suggestion";

export default function Feed() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 md:max-w-7xl mx-auto">
      <section className=" md-col-span-2 ">
        <Stories />
        <Posts />
      </section>

      <section className="hidden md:inline-grid ">
        <div className="fixed w-[380px]">
          <MiniProfile />
          <Suggestion />
        </div>
      </section>
    </main>
  );
}
