"use client";
import React from "react";
import MeetingReminder from "./components/MeetingResidentReminder";
import FavoriteMentorsArea from "./components/FavoriteMentorsArea";
import { PiSignOutBold } from "react-icons/pi";
import Link from "next/link";

export default function ResidentPage() {
  return (
    <>
      <div className="w-3/5 lg:w-4/6 sm:w-5/6 mt-[120px] mx-auto flex justify-between items-center">
        <h1 className="text-[20px] font-bold font-sans">
          Bem-vindo, Residente!
        </h1>
        <Link href={"/"}>
          <PiSignOutBold className="text-[27px] hover:animate-wobble" />
        </Link>
      </div>
      <div className="bg-[#eadcd3] bg-opacity-50 mt-[25px] mx-auto rounded-[20px] p-10 shadow-lg flex flex-col items-center justify-center w-3/5 lg:w-4/6 sm:w-5/6 mb-[50px]">
        <MeetingReminder />
        <FavoriteMentorsArea />
      </div>
    </>
  );
}
