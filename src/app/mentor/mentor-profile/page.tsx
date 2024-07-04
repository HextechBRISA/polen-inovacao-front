"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Mentor from "../../../../public/Mentor.png";
import { FaRegHeart, FaHeart, FaArrowLeft } from "react-icons/fa";
import MeetingSuccess from "./components/MeetingSuccess";

export default function MentorProfilePage() {
  const [isMeetingSuccessful, setIsMeetingSuccessful] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);

  function toggleFavorite() {
    setIsFavorited(!isFavorited);
  }

  async function handleMeeting() {
    setIsMeetingSuccessful(true);
  }

  return (
    <>
      {isMeetingSuccessful ? (
        <MeetingSuccess />
      ) : (
        <>
          <div className="w-3/5 lg:w-4/6 xs:w-5/6 mt-[120px] mx-auto flex justify-between items-center xs:h-48">
            <div className="w-auto h-full flex items-center sm:flex-col sm:items-start">
              <Image
                src={Mentor}
                alt="Mentor Image"
                className="w-20 h-20 rounded-full object-cover mr-4"
              />
              <div className="w-full flex flex-col">
                <h1 className="text-[20px] xs:text-[18px] text-shadow-md text-white font-semibold font-sans mb-3 sm:mt-3">
                  João Oliveira
                </h1>
                <div className="text-white text-sm h-auto flex flex-col items-start">
                  <h2 className="font-bold mr-2">Curso:</h2>
                  <h2>Análise e Desenvolvimento de Sistemas</h2>
                </div>
              </div>
            </div>
            <div className="flex flex-col h-full">
              {isFavorited ? (
                <FaHeart
                  className="text-[25px] xs:text-[22px] text-shadow-md text-red-500 cursor-pointer mb-4"
                  onClick={toggleFavorite}
                />
              ) : (
                <FaRegHeart
                  className="text-[25px] xs:text-[22px] text-shadow-md text-white cursor-pointer mb-4"
                  onClick={toggleFavorite}
                />
              )}
              <Link href={"/resident"}>
                <FaArrowLeft className="text-[25px] xs:text-[22px] text-shadow-md text-white hover:animate-wobble" />
              </Link>
            </div>
          </div>
          <div className="bg-white bg-opacity-30 mt-[30px] sm:mt-[10px] mx-auto rounded-[20px] p-10 shadow-lg flex flex-col items-center justify-center w-3/5 lg:w-4/6 xs:w-5/6">
            <h1 className="w-full font-bold text-[18px] xs:text-[16px] text-left mb-8">
              Marcar reunião de mentoria:
            </h1>
            <button
              onClick={handleMeeting}
              className="shadow-md mt-8 w-[200px] h-[30px] bg-[#EA5E53] text-white text-sm font-bold rounded-[50px]"
            >
              Agendar
            </button>
          </div>
        </>
      )}
    </>
  );
}
