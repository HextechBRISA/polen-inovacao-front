"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Mentor from "../../../../public/Mentor.png";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FaHandHoldingHeart, FaUserFriends } from "react-icons/fa";

export default function FavoriteMentorsArea() {
  const [hasFavoriteMentors, setHasFavoriteMentors] = useState();
  const [favoriteMentor, setFavoriteMentor] = useState([
    { mentor: "João Oliveira" },
    { mentor: "Maria Eduarda" },
    { mentor: "José Marques" },
    { mentor: "Ana Rosa Silveira" },
  ]);
  return (
    <>
      <h1 className="w-full text-left text-[20px] font-bold flex">
        <FaHandHoldingHeart className="mr-3 text-[#ee7a3c]" />
        Mentores favoritos:
      </h1>
      {hasFavoriteMentors && favoriteMentor.length > 0 ? (
        <>
          <div className="w-full h-auto mt-[30px] mb-6 xs:mb-4 flex flex-wrap flex-auto justify-center items-center gap-6 xs:flex-col xs:gap-0">
            {favoriteMentor.map((favoriteMentor, index) => (
              <>
                <Link href={"/mentor/mentor-profile"}>
                  <div
                    key={index}
                    className="w-40 h-[180px] p-6 bg-[#eadcd3] rounded-2xl mb-2 sm:mb-4 cursor-pointer flex flex-col items-center shadow-md hvr-push"
                  >
                    <Image
                      src={Mentor}
                      alt="Item 2"
                      className="w-20 h-20 rounded-full object-cover shadow-md mb-4"
                    />
                    <p className="text-center font-bold leading-tight">
                      {favoriteMentor.mentor}
                    </p>
                  </div>
                </Link>
              </>
            ))}
          </div>
          <Link href={"/mentor/all-mentors"}>
            <button className="w-auto h-auto border-2 border-solid border-[#ee7a3c] bg-[#eadcd3] bg-opacity-50 shadow-md font-sans font-bold text-[#ee7a3c] text-[16px] rounded-full flex items-center justify-center py-2 px-4 hvr-push">
              <FaUserFriends className="mr-2 text-[18px]" />
              Ver todos os mentores
            </button>
          </Link>
        </>
      ) : (
        <div className="w-full flex flex-col items-start mt-[20px]">
          <div className="shadow-md w-auto h-auto bg-[#f7b495] bg-opacity-80 text-[15px] text-center rounded-md flex items-center justify-center mb-5 p-3">
            <p>Você ainda não possui mentores favoritos</p>
          </div>
          <div className="w-full flex justify-start">
            <Link href={"/mentor/all-mentors"}>
              <button className="w-auto h-auto border-2 border-solid border-[#ee7a3c] bg-[#eadcd3] bg-opacity-50 shadow-md font-sans font-bold text-[#ee7a3c] text-[16px] rounded-full flex items-center justify-center py-2 px-4 hvr-push">
                <FaUserFriends className="mr-2 text-[18px]" />
                Conhecer mentores
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
