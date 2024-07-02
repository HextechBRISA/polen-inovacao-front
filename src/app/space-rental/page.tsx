"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Auditorium from "../../../public/Auditorium.jpg";
import TVStudio from "../../../public/TVStudio.jpg";
import PodcastStudio from "../../../public/PodcastStudio.png";

export default function SpaceRentalPage() {
  return (
    <div className="bg-white bg-opacity-30 mt-[130px] mx-auto rounded-[20px] p-10 shadow-lg flex flex-col items-center justify-center w-3/5 lg:w-4/6 xs:w-5/6">
      <h1 className="font-bold text-center text-xl mb-8">
        Escolha o espaço que deseja reservar:
      </h1>

      <div className="w-full flex flex-wrap justify-center items-center lg:flex-nowrap xl:flex-nowrap lg:space-x-4">
        <Link href={"/space-rental/auditorium"}>
          <div className="w-56 h-48 bg-[#ea5e53] rounded-2xl p-5 flex flex-col justify-center items-center m-2 cursor-pointer hover:bg-[#EE7A3C] hvr-float transition duration-500 ease-out">
            <Image
              className="w-full h-36 rounded-md object-cover overflow-hidden"
              src={Auditorium}
              alt="Auditório"
            />
            <h2 className="text-white text-xl mt-2">Auditório</h2>
          </div>
        </Link>

        <Link href={"/space-rental/tv-studio"}>
          <div className="w-56 h-48 bg-[#ea5e53] rounded-2xl p-5 flex flex-col justify-center items-center m-2 cursor-pointer hover:bg-[#EE7A3C] hvr-float transition duration-500 ease-out">
            <Image
              className="w-full h-36 rounded-md object-cover overflow-hidden"
              src={TVStudio}
              alt="TV Studio"
            />
            <h2 className="text-white text-xl mt-2">Studio de TV</h2>
          </div>
        </Link>

        <Link href={"/space-rental/podcast-studio"}>
          <div className="w-56 h-48 bg-[#ea5e53] rounded-2xl p-5 flex flex-col justify-center items-center m-2 cursor-pointer hover:bg-[#EE7A3C] hvr-float transition duration-500 ease-out">
            <Image
              className="w-full h-36 rounded-md object-cover overflow-hidden"
              src={PodcastStudio}
              alt="Studio de Podcast"
            />
            <h2 className="text-white text-xl mt-2">Studio de Podcast</h2>
          </div>
        </Link>
      </div>
    </div>
  );
}
