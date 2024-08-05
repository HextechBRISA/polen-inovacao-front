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
        <button className="w-auto h-auto border-2 border-solid border-[#ee7a3c] bg-[#eadcd3] bg-opacity-50 shadow-md font-sans font-bold text-[#ee7a3c] text-[16px] rounded-full flex items-center justify-center py-2 px-4 hvr-push">
          Voltar ao ínicio
          <RiHomeHeartLine className="ml-2 text-[18px]" />
        </button>
      </Link>
    </>
  );
}
