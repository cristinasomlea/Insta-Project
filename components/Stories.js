import React, { useEffect, useState } from "react";
import minifaker from "minifaker";
import "minifaker/locales/en";
import Story from "./Story";
import { useSession } from "next-auth/react";

export default function Stories() {
  const [storyUsers, setStoryUsers] = useState([]);

  const {data: session} = useSession();
  useEffect(() => {
    const storyUsers = minifaker.array(20, (i) => ({
      username: minifaker.username({ locales: "en" }).toLowerCase(),
      img: `https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70)}`,
      id: i,
    }));
    setStoryUsers(storyUsers);
    console.log("storyUsers: ", storyUsers);
  }, []);

  return <div className="flex space-x-2 p-5 bg-white mt-0 border-gray-200 border overflow-x-scroll rounded-sm scrollbar-thin">
   {session && (
    <Story
    img={session.user.image}
    username={session.user.username} isUser="true"/>
   )}
    {storyUsers.map(user => (
      <Story key = {user.id}
      username={user.username}
      img={user.img}
      />
    ))}
  </div>;
}
