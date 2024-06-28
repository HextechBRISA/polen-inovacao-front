"use client";
import React from "react";
import MeetingReminder from "./components/MeetingReminder";
import MentorsFollowed from "./components/MentorsFollowed";
import { HiOutlineArrowRightOnRectangle } from "react-icons/hi2";
import Link from "next/link";

export default function ResidentPage() {
  return (
    <>
      <div className="w-3/5 lg:w-4/6 xs:w-5/6 mt-[130px] mx-auto flex justify-between items-center">
        <h1 className="text-[18px] xs:text-[16px] text-shadow text-white">Bem-vindo, residente!</h1>
        <Link href={"/"}>
        <HiOutlineArrowRightOnRectangle className="text-[25px] xs:text-[22px] text-shadow text-white hover:animate-wobble"/>
        </Link>
      </div>
      <div className="bg-white bg-opacity-30 mt-[30px] mx-auto rounded-[20px] p-10 shadow-lg flex flex-col items-center justify-center w-3/5 lg:w-4/6 xs:w-5/6">
        <MeetingReminder />
        <MentorsFollowed />
      </div>
    </>
  );
}
