import React from "react";

import { getProviders, signIn } from "next-auth/react";
import Header from "@/components/Header";

export default function signin({ providers }) {
  return (
    <div className=" h-screen bg-gradient-to-r from-yellow-500 via-red-600 to-purple-500 mb-0">
      <div className="flex justify-center space-x-7 ">
        <img
          className="hidden object-cover md:inline-flex md:w-100 mt-40"
          src="https://www.sagipl.com/images/social-app/headimg2.png"
          alt="instagram-signIn-image"
        />
        <div>
            
          {Object.values(providers).map((provider) => (
            <div key={provider.name} className="flex flex-col items-center">
              <img
                className="w-40 object-cover items-center mt-96"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png"
                alt="instagram-logo"
              />
              <button className= "bg-blue-300 rounded-lg p-3 text-white mt-5 hover:bg-blue-500" onClick={() => signIn(provider.id, {callbackUrl: "/"})}>
                Sign In with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
}
