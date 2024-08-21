"use client";
import React from "react";
import MentorCalendar from "./components/MentorCalendar";
import MeetingMentorReminder from "./components/MeetingMentorReminder";

export default function MentorPage() {
  return (
    <>
      <div className="w-3/5 lg:w-4/6 sm:w-5/6 mt-[120px] mx-auto">
        <h1 className="text-[20px] font-bold font-sans">Bem-vindo, Mentor!</h1>
      </div>
      <div className="bg-[#eadcd3] bg-opacity-50 mt-[30px] mx-auto rounded-[20px] p-10 shadow-lg flex flex-col items-center justify-center w-3/5 lg:w-4/6 sm:w-5/6 mb-[50px]">
        <h2 className="w-full font-bold text-[18px] xs:text-[16px] text-left mb-6">
          Acompanhe seu calendário de reuniões de mentoria:
        </h2>
        <MentorCalendar isMentor={true} />
        <MeetingMentorReminder />
      </div>
    </>
  );
}
