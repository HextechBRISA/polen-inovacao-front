"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Mentor from "../../../../public/Mentor.png";
import { FaArrowLeft } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

export default function AllMentorsPage() {
  const [mentor, setMentor] = useState([
    { name: "João Oliveira" },
    { name: "Maria Eduarda" },
    { name: "José Marques" },
    { name: "Ana Rosa" },
  ]);

  return (
    <>
      <div className="w-3/5 lg:w-4/6 sm:w-5/6 mt-[120px] mx-auto flex justify-between items-center">
        <h1 className="text-[20px] text-shadow-md font-semibold font-sans">
          Mentores Pólen
        </h1>
        <Link href={"/resident"}>
          <FaArrowLeft className="text-[27px] xs:text-[24px] text-shadow-md hover:animate-wobble" />
        </Link>
      </div>
      <div className="bg-[#eadcd3] bg-opacity-50 mt-[30px] mx-auto rounded-[20px] p-10 shadow-lg flex flex-col items-center justify-center w-3/5 lg:w-4/6 sm:w-5/6 mb-[50px]">
        <h2 className="font-bold text-center text-xl">
          Acesse o perfil do mentor para agendar uma reunião de mentoria:
        </h2>
        <div className="w-full h-auto mt-[30px] flex flex-wrap flex-auto justify-center items-center gap-6 xs:flex-col xs:gap-0">
          {mentor.map((mentor, index) => (
            <>
              <Link href={"/mentor/mentor-profile"}>
                <div
                  key={index}
                  className="w-40 h-[200px] p-6 bg-[#FFFFFF] bg-opacity-30 rounded-2xl mb-6 cursor-pointer flex flex-col justify-center items-center shadow-md hover:bg-opacity-50 transition duration-500 hvr-push"
                >
                  <Image
                    src={Mentor}
                    alt="Item 2"
                    className="w-20 h-20 rounded-full object-cover mb-4"
                  />
                  <p className="text-center font-bold">{mentor.name}</p>
                  <div className="w-[115px] flex justify-center items-center font-sans font-semibold mt-3 text-[#ea5e53]">
                    <p>visitar perfil</p>
                    <IoIosArrowForward className="ml-0" />
                  </div>
                </div>
              </Link>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
