"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Auditorium from "../../../public/Auditorium.jpg";
import TVStudio from "../../../public/TVStudio.jpg";
import PodcastStudio from "../../../public/PodcastStudio.png";
import SpaceIcon1 from "../../../public/SpaceIcon1.png";
import SpaceIcon2 from "../../../public/SpaceIcon2.png";
import { FaCheck } from "react-icons/fa";

export default function SpaceRentalPage() {
  return (
    <div className="bg-[#eadcd3] bg-opacity-50 mt-[130px] mx-auto rounded-[20px] p-10 shadow-lg flex flex-col items-center justify-center w-3/5 lg:w-4/6 xs:w-5/6 mb-[50px]">
      <h1 className="font-bold text-center text-xl mb-8">
        Escolha o espaço que deseja reservar:
      </h1>

      <div className="w-full flex flex-wrap justify-center items-center lg:flex-nowrap xl:flex-nowrap lg:space-x-4">
        <Link href={"/space-rental/auditorium"}>
          <div className="w-56 h-48 bg-[#EE7A3C] bg-opacity-70 rounded-2xl p-5 flex flex-col justify-center items-center m-2 cursor-pointer hover:bg-opacity-100 hvr-float transition duration-500 ease-out">
            <Image
              className="w-full h-36 rounded-md object-cover overflow-hidden"
              src={Auditorium}
              alt="Auditório"
            />
            <h2 className="text-white text-xl mt-2">Auditório</h2>
            <h3>R$ 80/hora</h3>
          </div>
        </Link>

        <Link href={"/space-rental/tv-studio"}>
          <div className="w-56 h-48 bg-[#EE7A3C] bg-opacity-70 rounded-2xl p-5 flex flex-col justify-center items-center m-2 cursor-pointer hover:bg-opacity-100 hvr-float transition duration-500 ease-out">
            <Image
              className="w-full h-36 rounded-md object-cover overflow-hidden"
              src={TVStudio}
              alt="TV Studio"
            />
            <h2 className="text-white text-xl mt-2">Studio de TV</h2>
            <h3>R$ 80/hora</h3>
          </div>
        </Link>

        <Link href={"/space-rental/podcast-studio"}>
          <div className="w-56 h-48 bg-[#EE7A3C] bg-opacity-70 rounded-2xl p-5 flex flex-col justify-center items-center m-2 cursor-pointer hover:bg-opacity-100 hvr-float transition duration-500 ease-out">
            <Image
              className="w-full h-36 rounded-md object-cover overflow-hidden"
              src={PodcastStudio}
              alt="Studio de Podcast"
            />
            <h2 className="text-white text-xl mt-2">Studio de Podcast</h2>
            <h3>R$ 80/hora</h3>
          </div>
        </Link>
      </div>
      <div className="flex sm:flex-col mt-10 sm:mt-4 justify-center items-center">
        <div className="flex flex-col sm:flex-row mr-8 sm:mr-0 sm:mb-4">
          <Image src={SpaceIcon1} alt="Icon 1" className="w-28" />
          <Image src={SpaceIcon2} alt="Icon 2" className="w-28" />
        </div>
        <div>
          <h2 className="font-bold mb-4">O que está incluso no valor?</h2>
          <ul>
            <li className="flex mb-2">
              <FaCheck className="mr-2 text-[#EE7A3C]" />
              Água e Luz gratuitas;
            </li>
            <li className="flex mb-2">
              <FaCheck className="mr-2 text-[#EE7A3C]" />
              Café disponibilizado;
            </li>
            <li className="flex mb-2">
              <FaCheck className="mr-2 text-[#EE7A3C]" />
              Internet Wi-fi;
            </li>
            <li className="flex mb-2">
              <FaCheck className="mr-2 text-[#EE7A3C]" />
              Espaço Climatizado;
            </li>
            <li className="flex mb-2">
              <FaCheck className="mr-2 text-[#EE7A3C]" />
              Limpeza diária;
            </li>
            <li className="flex mb-2">
              <FaCheck className="mr-2 text-[#EE7A3C]" />
              Copa para almoço;
            </li>
            <li className="flex mb-2">
              <FaCheck className="mr-2 text-[#EE7A3C]" />
              Uma galera massa ao seu redor!
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
