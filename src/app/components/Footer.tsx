import React from "react";
import { TiSocialInstagram } from "react-icons/ti";
import { MdFacebook, MdEmail } from "react-icons/md";
import { RiChatSmile2Fill } from "react-icons/ri";

export function Footer() {
  return (
    <div className="w-full h-[120px] flex justify-around items-center bg-gradient-to-t from-[rgba(255,255,255,0.5)] to-transparent p-10 xs:p-6 mt-[70px] xs:mt-[40px] text-white">
      <h1 className="font-sans font-bold cursor-pointer hover:text-[#ea5e53] transition duration-300">
        SOBRE NÓS
      </h1>
      <h1 className="font-sans font-bold cursor-pointer sm:hidden hover:text-[#ea5e53] transition duration-300">
        PÓLEN INOVAÇÃO | 2024 ©
      </h1>
      <div className="flex">
        <RiChatSmile2Fill className="text-[25px] cursor-pointer hover:text-[#ea5e53] transition duration-300" />
        <TiSocialInstagram className="text-[25px] ml-2 cursor-pointer hover:text-[#ea5e53] transition duration-300" />
        <MdFacebook className="text-[25px] ml-2 cursor-pointer hover:text-[#ea5e53] transition duration-300" />
        <MdEmail className="text-[25px] ml-2 cursor-pointer hover:text-[#ea5e53] transition duration-300" />
      </div>
    </div>
  );
}
