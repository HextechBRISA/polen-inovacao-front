import React from "react";
import { TiSocialInstagram } from "react-icons/ti";
import { IoLogoLinkedin, IoLogoYoutube } from "react-icons/io";
import { BiChevronRight, BiLogoSpotify } from "react-icons/bi";
import LogoWhite from "../../../public/LogoWhite.png";
import { GrLocation } from "react-icons/gr";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <div className="w-full h-[150px] flex justify-around items-center bg-gradient-colors p-10 xs:p-6 mt-[70px] xs:mt-[40px] text-white">
      <div className="flex flex-col items-start justify-center text-[15px] font-sans font-bold cursor-pointer sm:hidden">
      <div className="flex items-center hover:text-[#635a56]">
          <BiChevronRight className="text-[22px]" />
          <Link href={"/who-we-ware"}>
            <p className="hvr-forward transition duration-300 mb-1">QUEM SOMOS</p>
          </Link>
        </div>
        <div className="flex items-center hover:text-[#635a56]">
          <BiChevronRight className="text-[22px]" />
          <Link href={"/"}>
            <p className="hvr-forward transition duration-300 mb-1">
              SAIBA MAIS
            </p>
          </Link>
        </div>
        <div className="flex items-center hover:text-[#635a56]">
          <BiChevronRight className="text-[22px]" />
          <Link href={"/products"}>
            <p className="hvr-forward transition duration-300 mb-1">
              PRODUTOS
            </p>
          </Link>
        </div>
        
        <div className="flex items-center hover:text-[#635a56]">
          <BiChevronRight className="text-[22px]" />
          <Link href={"/contact"}>
            <p className="hvr-forward transition duration-300 mb-1">CONTATO</p>
          </Link>
        </div>
      </div>
      <Image src={LogoWhite} alt="Pólen" className="w-[90px] xs:w-[80px]" />
      <div className="w-auto flex flex-col xs:items-center">
        <div className="flex">
          <Link
            href="https://open.spotify.com/show/6xXumIawt7MAYyW7o5GjSw?si=5963835338b14750"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BiLogoSpotify className="text-[27px] cursor-pointer hover:text-[#635a56] transition duration-300" />
          </Link>
          <Link
            href="https://www.instagram.com/polen.unisuam/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TiSocialInstagram className="text-[27px] ml-3 xs:ml-2 cursor-pointer hover:text-[#635a56] transition duration-300" />
          </Link>
          <Link
            href="https://www.linkedin.com/company/polen-unisuam/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoLinkedin className="text-[27px] ml-3 xs:ml-2 cursor-pointer hover:text-[#635a56] transition duration-300" />
          </Link>
          <Link
            href="https://www.youtube.com/channel/UChWCgAnhhUx_UK_xg48POUQ/featured"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoYoutube className="text-[27px] ml-3 xs:ml-2 cursor-pointer hover:text-[#635a56] transition duration-300" />
          </Link>
        </div>
        <div className="flex items-center mt-3">
          <GrLocation className="text-[22px] mr-2" />
          <h2>
            Av. Paris, n° 121 <br /> Bonsucesso, RJ
          </h2>
        </div>
      </div>
    </div>
  );
}
