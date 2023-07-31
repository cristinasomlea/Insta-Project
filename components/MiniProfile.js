import React from "react";
import { useSession, signOut } from "next-auth/react";

export default function MiniProfile() {
  const { data: session } = useSession();
  console.log("session", session);
  return (
    <>
      {session ? (
        <>
          <div className="flex item-center justify-between mt-5 ml-8">
            <img
              className="h-16 rounded-full border p-[2px]"
              src={session.user.image}
              alt="user-image"
            />
            <div className="flex-1 ml-4">
              <h2 className="font-bold">{session.user.username}</h2>
              <h3 className="text-sm text-gray-400">{session.user.name}</h3>
            </div>
            <button className="font-semibold text-blue-400 text-sm"  onClick={signOut}>
              Sign Out
            </button>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
}
