"use client";
import React from "react";
import BackgroundLogo from "../../components/BackgroundLogo";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function ContactPage() {
  return (
    <BackgroundLogo>
      <div className="w-[80%] sm:w-auto p-5 xs:p-2 flex flex-wrap flex-col justify-center item-center">
        <h1 className="text-[25px] xs:text-[22px] font-sans font-bold text-center mb-6 text-[#EA5E53]">
          VAMOS INOVAR JUNTOS?
        </h1>

        <h2 className="text-[22px] xs:text-[20px] text-center mb-8">
          Entre em contato conosco para ajuda, um papo ou um café:
        </h2>

        <div className="text-[22px] xs:text-[20px] flex h-[30px] mb-8 xs:mb-4 justify-start">
          <MdEmail className="text-[25px] sm:text-[23px] mr-4 xs:mr-2 text-[#EA5E53]" />
          <span>polen@unisuam.edu.br</span>
        </div>

        <div className="text-[22px] xs:text-[20px] flex h-[30px] mb-8 xs:mb-4 justify-start">
          <BsFillTelephoneFill className="text-[25px] sm:text-[23px] mr-4 xs:mr-2 text-[#EA5E53]" />
          <span>(21) 3030-1601</span>
        </div>

        <div className="text-[22px] xs:text-[20px] flex h-auto justify-start">
          <FaMapMarkerAlt className="text-[25px] sm:text-[23px] mr-4 xs:mr-2 text-[#EA5E53]" />
          <span>
            Av. Paris, n° 121, Bonsucesso. <br />
            21041-020. Rio de Janeiro, RJ.
          </span>
        </div>
      </div>
    </BackgroundLogo>
  );
}
