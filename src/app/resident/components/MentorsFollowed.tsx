"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Mentor from "../../../../public/Mentor.png"

export default function MentorsFollowed() {
  return (
    <div>
          


          <div className="flex flex-wrap flex-auto justify-center sm:justify-center gap-4 sm:gap-8">
  
          <div className="w-40 sm:w-auto p-4 ease-out bg-[#FFFFFF] bg-opacity-25 rounded-2xl hvr-float transition mb-4 sm:mb-0">
            <div className="flex flex-col items-center">
              <Image 
                src={Mentor} 
                alt="Item 2" 
                className="w-full mb-2 rounded-lg"/>
              <p className="text-center">Mentor 1</p>
            </div>
          </div>

          <div className="w-40 sm:w-auto p-4 ease-out bg-[#FFFFFF] bg-opacity-25 rounded-2xl hvr-float transition mb-4 sm:mb-0">
            <div className="flex flex-col items-center">
              <Image 
                src={Mentor} 
                alt="Item 2" 
                className="w-full mb-2 rounded-lg"/>
              <p className="text-center">Mentor 2</p>
            </div>
          </div>

          <div className="w-40 sm:w-auto p-4 ease-out bg-[#FFFFFF] bg-opacity-25 rounded-2xl hvr-float transition mb-4 sm:mb-0">
            <div className="flex flex-col items-center">
              <Image 
                src={Mentor} 
                alt="Item 3" 
                className="w-full mb-1 rounded-lg"/>
              <p className="text-center">Mentor 3</p>
            </div>
          </div>

          <div className="w-40 sm:w-auto p-4 bg-[#FFFFFF] bg-opacity-25 rounded-2xl hvr-float transition mb-4 sm:mb-0">
            <div className="flex flex-col items-center">
              <Image 
                src={Mentor} 
                alt="Item 3" 
                className="w-full mb-1 rounded-lg"/>
              <p className="text-center">Mentor 4</p>
            </div>
          </div>

        </div>


    </div>
  );
}
