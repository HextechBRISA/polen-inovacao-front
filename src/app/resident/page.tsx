"use client";
import React from "react";
import MeetingReminder from "./components/MeetingResidentReminder";
import FavoriteMentorsArea from "./components/FavoriteMentorsArea";
import { PiSignOutBold } from "react-icons/pi";
import Link from "next/link";

export default function ResidentPage() {
  return (
    <>
      <div className="w-3/5 lg:w-4/6 xs:w-5/6 mt-[120px] mx-auto flex justify-between items-center">
        <h1 className="text-[20px] xs:text-[18px] text-shadow-md text-white font-semibold font-sans">
          Bem-vindo, Residente!
        </h1>
        <Link href={"/"}>
          <PiSignOutBold className="text-[27px] xs:text-[24px] text-shadow-md text-white hover:animate-wobble" />
        </Link>
      </div>
      <div className="bg-white bg-opacity-30 mt-[30px] mx-auto rounded-[20px] p-10 shadow-lg flex flex-col items-center justify-center w-3/5 lg:w-4/6 xs:w-5/6">
        <MeetingReminder />
        <FavoriteMentorsArea />
      </div>
    </>
  );
}
