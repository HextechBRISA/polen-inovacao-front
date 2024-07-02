"use client";
import React, { useState } from "react";

export default function MeetingReminder() {
  // Estado para verificar se o aluno tem mentorias agendadas
  const [hasMentorships, setHasMentorships] = useState(); // Mude para true para testar mentorias marcadas
  // Estado para armazenar a lista de mentorias
  const [mentorships, setMentorships] = useState([
    { mentor: "João" },
    { mentor: "Maria" }
  ]);

  return (
    <div className="flex flex-col items-center">
      <h1 className="mb-[50px]">Lembrete:</h1>
      {hasMentorships && mentorships.length > 0 ? (
        mentorships.map((mentorship, index) => (
          <div
            key={index}
            className="shadow-md w-[500px] h-[50px] bg-[#EA5E53] text-white text-sm font-bold rounded-[50px] flex items-center justify-center mb-6"
          >
            <p>
              Você possui uma mentoria marcada com o mentor {mentorship.mentor}
            </p>
          </div>
        ))
      ) : (
        <>
          <div className="shadow-md w-[500px] h-[50px] bg-[#EA5E53] text-white text-sm font-bold rounded-[50px] flex items-center justify-center mb-6">
            <p>Você não possui mentoria agendada no momento</p>
          </div>
          <div className="shadow-md w-[200px] h-[50px] bg-[#EE7A3C] text-white text-sm font-bold rounded-[50px] flex items-center justify-center hover:bg-[#f38c54] mb-6">
            <button className="w-full h-full">Agendar agora &rarr;</button>
          </div>
        </>
      )}
    </div>
  );
}
