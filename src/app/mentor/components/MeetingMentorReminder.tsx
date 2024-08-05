"use client";
import React, { useState } from "react";
import { MdNotificationsActive } from "react-icons/md";

export default function MeetingMentorReminder() {
  const [hasScheduledMentoring, setHasScheduledMentoring] = useState();
  const [scheduledResident, setScheduledResident] = useState([
    { resident: "João" },
    { resident: "Maria" },
  ]);

  return (
    <div className="w-full flex flex-col items-start mt-10">
      <h1 className="mb-[20px] text-[20px] font-bold flex">
        <MdNotificationsActive className="mr-3 text-[22px] text-[#ee7a3c]" />
        Lembrete:
      </h1>
      {hasScheduledMentoring && scheduledResident.length > 0 ? (
        scheduledResident.map((scheduledResident, index) => (
          <div
            key={index}
            className="shadow-md w-auto h-auto bg-[#f7b495] bg-opacity-80 text-[15px] text-center rounded-md flex items-center justify-center mb-5 p-3"
          >
            <p>
              Você possui uma mentoria marcada com o residente{" "}
              <strong>{scheduledResident.resident}</strong>
            </p>
          </div>
        ))
      ) : (
        <>
          <div className="shadow-md w-auto h-auto bg-[#f7b495] bg-opacity-80 text-[15px] text-center rounded-md flex items-center justify-center p-3">
            <p>Você não possui mentoria agendada no momento</p>
          </div>
        </>
      )}
    </div>
  );
}
