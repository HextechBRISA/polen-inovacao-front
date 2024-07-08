"use client";
import React, { useState } from "react";

export default function MeetingMentorReminder() {
  const [hasScheduledMentoring, setHasScheduledMentoring] = useState(); 
  const [scheduledResident, setScheduledResident] = useState([
    { resident: "João" },
    { resident: "Maria" },
  ]);

  return (
    <div className="w-full flex flex-col items-start mb-10">
      <h1 className="mb-[20px] text-[20px] font-bold mt-8">Lembrete:</h1>
      {hasScheduledMentoring && scheduledResident.length > 0 ? (
        scheduledResident.map((scheduledResident, index) => (
          <div
            key={index}
            className="shadow-md w-auto h-auto bg-[#EA5E53] bg-opacity-80 text-white text-[15px] text-center rounded-md flex items-center justify-center mb-5 p-3"
          >
            <p>
              Você possui uma mentoria marcada com o residente {scheduledResident.resident}
            </p>
          </div>
        ))
      ) : (
        <>
          <div className="shadow-md w-auto h-auto bg-[#EA5E53] bg-opacity-80 text-white text-[15px] text-center rounded-md flex items-center justify-center p-3">
            <p>Você não possui mentoria agendada no momento</p>
          </div>
        </>
      )}
    </div>
  );
}
