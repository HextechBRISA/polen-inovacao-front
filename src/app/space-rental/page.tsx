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
    <div className="bg-[#eadcd3] bg-opacity-50 mt-[120px] mx-auto rounded-[20px] p-10 sm:p-6 shadow-lg flex flex-col items-center justify-center w-3/5 lg:w-4/6 sm:w-5/6 mb-[50px]">
      <h1 className="font-bold text-center text-xl mb-6">
        Escolha o espaço que deseja reservar:
      </h1>

      <div className="w-full flex flex-wrap sm:flex-col justify-center items-center lg:flex-nowrap xl:flex-nowrap lg:space-x-4">
        <Link href={"/space-rental/auditorium"}>
          <div className="w-52 h-[250px] xs:w-[260px] xs:h-[150px] sm:w-[380px] sm:h-[220px] rounded-[10px] m-2 sm:m-0 sm:mb-6 cursor-pointer bg-[rgba(238,122,60,0.5)] shadow-md hvr-push overflow-hidden">
            <Image
              className="w-full h-full shadow-md object-cover overflow-hidden relative opacity-80"
              src={Auditorium}
              alt="Auditório"
            />
            <div className="w-full absolute bottom-0 left-0 text-[#eadcd3] bg-[rgba(43,43,43,0.5)] flex flex-col items-center p-4 hover:bg-[rgba(234,94,83,0.5)] transition duration-500 ease-out">
              <h2 className="text-[20px] font-semibold mb-2">Auditório</h2>
              <h3>R$ 80/hora</h3>
            </div>
          </div>
        </Link>

        <Link href={"/space-rental/tv-studio"}>
          <div className="w-52 h-[250px] xs:w-[260px] xs:h-[150px] sm:w-[380px] sm:h-[220px] rounded-[10px] m-2 sm:m-0 sm:mb-6 cursor-pointer bg-[rgba(238,122,60,0.5)] shadow-md hvr-push overflow-hidden">
            <Image
              className="w-full h-full shadow-md object-cover overflow-hidden relative opacity-80"
              src={TVStudio}
              alt="TV Studio"
            />
            <div className="w-full absolute bottom-0 left-0 text-[#eadcd3] bg-[rgba(43,43,43,0.5)] flex flex-col items-center p-4 hover:bg-[rgba(234,94,83,0.5)] transition duration-500 ease-out">
              <h2 className="text-[20px] font-semibold mb-2">TV Studio</h2>
              <h3>R$ 80/hora</h3>
            </div>
          </div>
        </Link>

        <Link href={"/space-rental/podcast-studio"}>
          <div className="w-52 h-[250px] xs:w-[260px] xs:h-[150px] sm:w-[380px] sm:h-[220px] rounded-[10px] m-2 sm:m-0 cursor-pointer bg-[rgba(238,122,60,0.5)] shadow-md hvr-push overflow-hidden">
            <Image
              className="w-full h-full shadow-md object-cover overflow-hidden relative opacity-80"
              src={PodcastStudio}
              alt="Studio de Podcast"
            />
            <div className="w-full absolute bottom-0 left-0 text-[#eadcd3] bg-[rgba(43,43,43,0.5)] flex flex-col items-center p-4 hover:bg-[rgba(234,94,83,0.5)] transition duration-500 ease-out">
              <h2 className="text-[20px] font-semibold mb-2">Podcast Studio</h2>
              <h3>R$ 80/hora</h3>
            </div>
          </div>
        </Link>
      </div>
      <div className="flex sm:flex-col mt-6 justify-center items-center">
        <div className="flex flex-col sm:flex-row mr-6 sm:mr-0 sm:mb-4">
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
