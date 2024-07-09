import React from "react";
import { TiSocialInstagram } from "react-icons/ti";
import { MdFacebook, MdEmail } from "react-icons/md";
import { RiChatSmile2Fill } from "react-icons/ri";
import Image from "next/image";

export function Footer() {
  return (
    <div className="w-full h-[130px] flex justify-around items-center bg-gradient-to-t from-[rgba(255,255,255,0.5)] to-transparent p-10 xs:p-6 mt-[70px] xs:mt-[40px] text-white">
      <div className="flex flex-col items-start justify-center text-[15px] font-sans font-bold cursor-pointer sm:hidden">
        <p className="hover:text-[#d2534a] hvr-forward transition duration-300 mb-1">
          SOBRE NÓS
        </p>
        <p className="hover:text-[#d2534a] hvr-forward transition duration-300 mb-1">
          FAVELA INOVA
        </p>
        <p className="hover:text-[#d2534a] hvr-forward transition duration-300">
          PARCEIROS
        </p>
      </div>
      <Image
        src="/LogoPolen.png"
        alt="Pólen"
        width={80}
        height={80}
        className="xs:w-[70px] xs:h-[60px]"
      />
      <div className="flex">
        <RiChatSmile2Fill className="text-[25px] cursor-pointer hover:text-[#d2534a] transition duration-300" />
        <TiSocialInstagram className="text-[25px] ml-2 cursor-pointer hover:text-[#d2534a] transition duration-300" />
        <MdFacebook className="text-[25px] ml-2 cursor-pointer hover:text-[#d2534a] transition duration-300" />
        <MdEmail className="text-[25px] ml-2 cursor-pointer hover:text-[#d2534a] transition duration-300" />
      </div>
    </div>
  );
}
