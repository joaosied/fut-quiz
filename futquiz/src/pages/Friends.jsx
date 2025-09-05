import React from "react";
import { MdOutlineAdd } from "react-icons/md";
import NavBar from "../components/NavBar";
import FriendOn from "../components/FriendOn";

export default function Friends() {
  return (
    <div className="w-full min-h-screen flex flex-col gap-6">
      <NavBar type={"logged"} />
      <div className="flex items-center justify-center">
        <h1
          className="font-bebas-neue text-2xl bg-gradient-to-b from-[#006CD4] to-[#5D38AD] bg-clip-text text-transparent"
          style={{
            textShadow: `
      0 2px 4px rgba(0,0,0,0.2),
      0 4px 8px rgba(0,0,0,0.2)
    `,
          }}
        >
          lista de amigos
        </h1>
        <MdOutlineAdd className="absolute right-4 text-lg" />
      </div>

      <div className="flex flex-col items-center gap-6 pb-6">
        <div className="w-11/12 flex items-center justify-around">
          <FriendOn online={true} name={'TREMBOL..'} />
          <FriendOn online={true} name={'POLACOOL'}  />
          <FriendOn name={'PEDROS...'} />
          <FriendOn name={'FRIFRAS'}  />
        </div>
        <div className="w-11/12 flex items-center justify-around">
          <FriendOn name={''} />
          <FriendOn name={''}  />
          <FriendOn name={''} />
          <FriendOn name={''}  />
        </div>
        <div className="w-11/12 flex items-center justify-around">
          <FriendOn name={''} />
          <FriendOn name={''}  />
          <FriendOn name={''} />
          <FriendOn name={''}  />
        </div>
        <div className="w-11/12 flex items-center justify-around">
          <FriendOn name={''} />
          <FriendOn name={''}  />
          <FriendOn name={''} />
          <FriendOn name={''}  />
        </div>
      </div>
    </div>
  );
}
