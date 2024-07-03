"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Mentor from "../../../../public/Mentor.png"
import { FaArrowRightLong } from "react-icons/fa6"


export default function MentorsFollowed() {
  const [hasMentorfavorites, setHasMentorfavorites] = useState();
  const [mentorfavorite, setMentorFavorite] = useState([
    { mentor: "João" },
    { mentor: "Maria" }
  ])
  return (
    <div className="w-full flex flex-col items-start mb-8"> 
      <h1 className="mb-[20px] text-[20px] font-bold">Mentores favoritos:</h1> 
      {hasMentorfavorites && mentorfavorite.length > 0 ? (
        mentorfavorite.map((mentorfavorites, index)  => (
          
          <div 
          key={index}
          className="flex flex-wrap flex-auto justify-center sm:justify-center gap-4 sm:gap-8">
  
            <div 
            className="w-1/5 sm:w-auto p-4 ease-out bg-[#FFFFFF] bg-opacity-25 rounded-2xl hvr-float transition mb-4 sm:mb-0">
              <div className="flex flex-col items-center">
                <Image 
                  src={Mentor} 
                  alt="Item 2" 
                  className="w-full mb-2 rounded-lg"/>
              <p className="text-center">Mentor 1 {mentorfavorites.mentor}</p>
              </div>
            </div>

            <div className="w-1/5 sm:w-auto p-4 ease-out bg-[#FFFFFF] bg-opacity-25 rounded-2xl hvr-float transition mb-4 sm:mb-0">
              <div className="flex flex-col items-center">
                <Image 
                  src={Mentor} 
                  alt="Item 2" 
                  className="w-full mb-2 rounded-lg"/>
                <p className="text-center">Mentor 2 {mentorfavorites.mentor}</p>
              </div>
            </div>

            <div className="w-1/5 sm:w-auto p-4 ease-out bg-[#FFFFFF] bg-opacity-25 rounded-2xl hvr-float transition mb-4 sm:mb-0">
              <div className="flex flex-col items-center">
                <Image 
                  src={Mentor} 
                  alt="Item 3" 
                  className="w-full mb-1 rounded-lg"/>
                <p className="text-center">Mentor 3 {mentorfavorites.mentor}</p>
              </div>
            </div>

            <div className="w-1/5 sm:w-auto p-4 bg-[#FFFFFF] bg-opacity-25 rounded-2xl hvr-float transition mb-4 sm:mb-0">
              <div className="flex flex-col items-center">
                <Image 
                  src={Mentor} 
                  alt="Item 3" 
                  className="w-full mb-1 rounded-lg"/>
                <p className="text-center">Mentor 4{mentorfavorites.mentor}</p>
              </div>
            </div>
          </div>


        ))
      ) : (
          
          <>
          

            <div className="shadow-md w-auto h-auto bg-[#EA5E53] bg-opacity-80 text-white text-[15px] text-center rounded-md flex items-center justify-center mb-4 p-3">
            <p>Você ainda não possui mentores favoritos</p>
            </div>

            <Link href={"/mentor/all-mentors"}>
            <button className="shadow-md w-auto h-auto bg-[#EE7A3C] text-white text-[15px] rounded-full flex items-center justify-center p-3 hvr-push">
              Conheça os mentores
              <FaArrowRightLong className="ml-2 text-[20px]" />
            </button>
            </Link>
            </>
        )}
    </div>
  );
}
