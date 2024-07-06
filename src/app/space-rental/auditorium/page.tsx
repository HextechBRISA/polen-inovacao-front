"use client";
import React from "react";
import Image from "next/image";
import Auditorium from "../../../../public/Auditorium.jpg";
import AuditoriumCalendar from "./components/AuditoriumCalendar";

export default function AuditoriumPage() {
  return (
    <div className="bg-white bg-opacity-30 mt-[130px] mx-auto rounded-[20px] p-10 xs:p-6 shadow-lg flex flex-col items-center justify-center w-3/5 lg:w-4/6 sm:w-5/6 xs:w-5/6">
      <div className="w-full rounded-[10px] relative overflow-hidden w-full h-48">
        <Image
          src={Auditorium}
          alt="Auditório"
          className="object-cover w-full h-full opacity-80"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 flex justify-center items-center text-white z-10">
          <h1 className="text-[22px] xs:text-[18px] font-bold">
            Calendário do Auditório:
          </h1>
        </div>
      </div>
      <h2 className="w-full mt-[30px] font-bold text-[18px] xs:text-[16px] text-left mb-3">
        Escolha uma data e horário para reservar o espaço:
      </h2>
      <h3 className="w-full text-[15px] xs:text-[14px] text-left mb-8 xs:mb-4">
        (Clique para selecionar uma data e segure e arraste para selecionar um
        horário)
      </h3>

      <AuditoriumCalendar />
    </div>
  );
}
