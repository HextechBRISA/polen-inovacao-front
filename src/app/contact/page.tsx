"use client";
import React from "react";
import BackgroundForms from "../components/BackgroundForms";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function ContactPage() {
  return (
    <BackgroundForms>
      <div className="w-[80%] sm:w-auto p-5 xs:p-2 flex flex-wrap flex-col justify-center item-center">
        <h1 className="text-[25px] xs:text-[22px] font-sans font-bold text-center mb-2 mt-2 text-[#EA5E53]">
          VAMOS INOVAR JUNTOS?
        </h1>

        <h2 className="text-[22px] xs:text-[20px] text-center mb-4 p-6">
          Entre em contato conosco para ajuda, um papo ou um café:
        </h2>

        <div className="text-[22px] xs:text-[20px] flex h-[30px] mb-8 justify-start">
          <MdEmail className="text-[25px] sm:text-[23px] mr-4 xs:mr-2 text-[#EA5E53]" />
          <span>polen@unisuam.edu.br</span>
        </div>

        <div className="text-[22px] xs:text-[20px] flex h-[30px] mb-8 justify-start">
          <BsFillTelephoneFill className="text-[25px] sm:text-[23px] mr-4 xs:mr-2 text-[#EA5E53]" />
          <span>(21) 3030-1601</span>
        </div>

        <div className="text-[22px] xs:text-[20px] flex h-auto justify-start">
          <FaMapMarkerAlt className="text-[25px] sm:text-[23px] mr-4 xs:mr-2 text-[#EA5E53]" />
          <span>
            Av. Paris, n° 121, Bonsucesso. <br />
            Rio de Janeiro, RJ (21041-020)
          </span>
        </div>
      </div>
    </BackgroundForms>
  );
}
