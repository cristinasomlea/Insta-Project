import minifaker from "minifaker";
import { useEffect, useState } from "react";

export default function Suggestion() {
  const [suggestion, setSuggestion] = useState([]);

  useEffect(() => {
    const suggestion = minifaker.array(5, (i) => ({
      username: minifaker.username({ locale: "en" }).toLowerCase(),
      jobTitle: minifaker.jobTitle({ locale: "en" }),
      id: i,
    }));
    setSuggestion(suggestion);
  }, []);

  return (
    <div className=" mt-5 ml-8 " >
      <div className="flex items-center justify-between ">
        <h3 className="font-semibold text-gray-500">Suggested for you</h3>
        <button className="text-black-400 text-sm font-semibold">
          See All
        </button>
      </div>
      {suggestion.map((suggestion) => (
        <div className="flex item-center justify-between mt-2">
          <img
            className="h-16 rounded-full border p-[2px]"
            src={`https://i.pravatar.cc/150?img=${Math.ceil(
              Math.random() * 70
            )}`}
            alt=""
          ></img>
          <div className="flex-1 ml-4">
            <h2 className="font-bold">{suggestion.username}</h2>
            <h3 className="text-sm text-gray-400">{suggestion.jobTitle}</h3>
          </div>
          <button className="font-semibold text-blue-400 text-sm">
            Follow
          </button>
        </div>
      ))}
    </div>
  );
}
