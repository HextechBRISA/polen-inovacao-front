"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Mentor from "../../../../public/Mentor.png";
import { FaArrowRightLong } from "react-icons/fa6";

export default function FavoriteMentorsArea() {
  const [hasFavoriteMentors, setHasFavoriteMentors] = useState();
  const [favoriteMentor, setFavoriteMentor] = useState([
    { mentor: "João Oliveira" },
    { mentor: "Maria Eduarda" },
    { mentor: "José Marques" },
    { mentor: "Ana Rosa" },
  ]);
  return (
    <>
      <h1 className="w-full text-left text-[20px] font-bold">
        Mentores favoritos:
      </h1>
      {hasFavoriteMentors && favoriteMentor.length > 0 ? (
        <div className="w-full h-auto mt-[30px] flex flex-wrap flex-auto justify-center items-center gap-6 sm:gap-0">
          {favoriteMentor.map((favoriteMentor, index) => (
            <>
              <Link href={"/mentor/mentor-profile"}>
                <div
                  key={index}
                  className="w-40 h-[180px] p-6 bg-[#FFFFFF] bg-opacity-30 rounded-2xl mb-6 cursor-pointer flex flex-col items-center shadow-md hover:bg-opacity-50 transition duration-500 hvr-push"
                >
                  <Image
                    src={Mentor}
                    alt="Item 2"
                    className="w-20 h-20 rounded-full object-cover mb-4"
                  />
                  <p className="text-center font-bold">
                    {favoriteMentor.mentor}
                  </p>
                </div>
              </Link>
            </>
          ))}
        </div>
      ) : (
        <div className="w-full flex flex-col items-start mt-[20px]">
          <div className="shadow-md w-auto h-auto bg-[#EA5E53] bg-opacity-80 text-white text-[15px] text-center rounded-md flex items-center justify-center mb-4 p-3">
            <p>Você ainda não possui mentores favoritos</p>
          </div>

          <Link href={"/mentor/all-mentors"}>
            <button className="shadow-md w-auto h-auto bg-[#EE7A3C] text-white text-[15px] rounded-full flex items-center justify-center p-3 hvr-push">
              Conheça os mentores
              <FaArrowRightLong className="ml-2 text-[20px]" />
            </button>
          </Link>
        </div>
      )}
    </>
  );
}
