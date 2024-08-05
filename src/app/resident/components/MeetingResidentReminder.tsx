"use client";
import Link from "next/link";
import React, { useState } from "react";
import { MdNotificationsActive } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";

export default function MeetingResidentReminder() {
  const [hasMentorships, setHasMentorships] = useState();
  const [mentorships, setMentorships] = useState([
    { mentor: "João" },
    { mentor: "Maria" },
  ]);

  return (
    <div className="w-full flex flex-col items-start mb-10">
      <h1 className="mb-[20px] text-[20px] font-bold flex">
        <MdNotificationsActive className="mr-3 text-[22px] text-[#ee7a3c]" />
        Lembrete:
      </h1>
      {hasMentorships && mentorships.length > 0 ? (
        <>
          {mentorships.map((mentorship, index) => (
            <div
              key={index}
              className="shadow-md w-auto h-auto bg-[#f7b495] bg-opacity-80 text-[15px] text-center rounded-md flex items-center justify-center mb-5 p-3"
            >
              <p>
                Você possui uma mentoria marcada com o mentor{" "}
                <strong>{mentorship.mentor}</strong>
              </p>
            </div>
          ))}
          <div className="w-full flex justify-center mt-2">
            <Link href={"/mentor/all-mentors"}>
              <button className="w-auto h-auto border-2 border-solid border-[#ee7a3c] bg-[#eadcd3] bg-opacity-50 shadow-md font-sans font-bold text-[#ee7a3c] text-[16px] rounded-full flex items-center justify-center py-2 px-4 hvr-push">
                <FaRegCalendarAlt className="mr-2 text-[18px]" />
                Agendar nova mentoria
              </button>
            </Link>
          </div>
        </>
      ) : (
        <>
          <div className="shadow-md w-auto h-auto bg-[#f7b495] bg-opacity-80 text-[15px] text-center rounded-md flex items-center justify-center mb-5 p-3">
            <p>Você não possui mentoria agendada no momento</p>
          </div>
          <div className="w-full flex justify-start">
            <Link href={"/mentor/all-mentors"}>
              <button className="w-auto h-auto border-2 border-solid border-[#ee7a3c] bg-[#eadcd3] bg-opacity-50 shadow-md font-sans font-bold text-[#ee7a3c] text-[16px] rounded-full flex items-center justify-center py-2 px-4 hvr-push">
                <FaRegCalendarAlt className="mr-2 text-[18px]" />
                Agendar agora
              </button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
