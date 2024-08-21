"use client";
import React from "react";
import MeetingReminder from "./components/MeetingResidentReminder";
import FavoriteMentorsArea from "./components/FavoriteMentorsArea";

export default function ResidentPage() {
  return (
    <>
      <div className="w-3/5 lg:w-4/6 sm:w-5/6 mt-[120px] mx-auto">
        <h1 className="text-[20px] font-bold font-sans">
          Bem-vindo, Residente!
        </h1>
      </div>
      <div className="bg-[#eadcd3] bg-opacity-50 mt-[25px] mx-auto rounded-[20px] p-10 shadow-lg flex flex-col items-center justify-center w-3/5 lg:w-4/6 sm:w-5/6 mb-[50px]">
        <MeetingReminder />
        <FavoriteMentorsArea />
      </div>
    </>
  );
}
