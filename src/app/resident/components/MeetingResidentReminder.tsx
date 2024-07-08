"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

export default function MeetingResidentReminder() {
  // Estado para verificar se o aluno tem mentorias agendadas
  const [hasMentorships, setHasMentorships] = useState(); // Mude para true para testar mentorias marcadas
  // Estado para armazenar a lista de mentorias
  const [mentorships, setMentorships] = useState([
    { mentor: "João" },
    { mentor: "Maria" },
  ]);

  return (
    <div className="w-full flex flex-col items-start mb-10">
      <h1 className="mb-[20px] text-[20px] font-bold">Lembrete:</h1>
      {hasMentorships && mentorships.length > 0 ? (
        mentorships.map((mentorship, index) => (
          <div
            key={index}
            className="shadow-md w-auto h-auto bg-[#EA5E53] bg-opacity-80 text-white text-[15px] text-center rounded-md flex items-center justify-center mb-4 p-3"
          >
            <p>
              Você possui uma mentoria marcada com o mentor {mentorship.mentor}
            </p>
          </div>
        ))
      ) : (
        <>
          <div className="shadow-md w-auto h-auto bg-[#EA5E53] bg-opacity-80 text-white text-[15px] text-center rounded-md flex items-center justify-center mb-4 p-3">
            <p>Você não possui mentoria agendada no momento</p>
          </div>

          <Link href={"/mentor/all-mentors"}>
            <button className="shadow-md w-auto h-auto bg-[#EE7A3C] text-white text-[15px] rounded-full flex items-center justify-center p-3 hvr-push">
              Agendar agora
              <FaArrowRightLong className="ml-2 text-[20px]" />
            </button>
          </Link>
        </>
      )}
    </div>
  );
}
