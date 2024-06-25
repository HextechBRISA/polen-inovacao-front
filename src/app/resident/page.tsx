"use client";
import React from "react";
import MeetingReminder from "./components/MeetingReminder";
import MentorsFollowed from "./components/MentorsFollowed";
import { HiOutlineArrowRightOnRectangle } from "react-icons/hi2";

export default function ResidentPage() {
  return (
    <>
      <div className="w-3/5 lg:w-4/6 xs:w-5/6 mt-[130px] mx-auto flex justify-between items-center">
        <h1>Bem-vindo, residente!</h1>
        <HiOutlineArrowRightOnRectangle />
      </div>
      <div className="bg-white bg-opacity-30 mt-[30px] mx-auto rounded-[20px] p-10 shadow-lg flex flex-col items-center justify-center w-3/5 lg:w-4/6 xs:w-5/6">
        <MeetingReminder />
        <MentorsFollowed />
      </div>
    </>
  );
}
