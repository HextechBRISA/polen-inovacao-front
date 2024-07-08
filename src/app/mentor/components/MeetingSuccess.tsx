import Link from "next/link";
import React from "react";
import { FaCheck } from "react-icons/fa";
import { RiHomeHeartLine } from "react-icons/ri";

export default function MeetingSuccess() {
  return (
    <>
      <h1 className="font-bold text-center text-xl mb-0">
        Mentoria agendada com sucesso!
      </h1>
      <FaCheck className="text-green-500 text-2xl my-5" />
      <h2 className="font-normal text-center text-lg mb-6">
        Manteremos um lembrete em sua página inicial...
      </h2>
      <Link href={"/resident"}>
        <button className="shadow-md w-[180px] h-[40px] border-[#EA5E53] border-solid border-2 text-[#EA5E53] text-[15px] font-bold rounded-full flex justify-center items-center">
          Voltar ao ínicio
          <RiHomeHeartLine className="text-[#EA5E53] text-[20px] ml-2" />
        </button>
      </Link>
    </>
  );
}
