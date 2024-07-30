"use client";
import React from "react";
import BackgroundForms from "../components/BackgroundForms";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function contactpage() {

return (
    <BackgroundForms>

        <div className="text-3xl xs:text-[22px] font-bold text-center mb-6 text-[#EA5E53]">VAMOS INOVAR JUNTOS?</div>

        <div
        className="text-2xl xs:text-[20px] font-alef text-center w-[500px] xs:w-[300px] mb-10 p-6">Entre em contato conosco para ajuda, um papo ou um café:</div>

        <div   
            className="text-2xl xs:text-[20px] flex items-center font-alef w-[300px] h-[30px] mb-8 justify-start">
                <MdEmail className="text-3xl mr-2 text-[#EA5E53]"/> 
                polen@unisuam.edu.br
        </div>

        <div 
            className="text-2xl xs:text-[20px] flex items-center font-alef w-[300px] h-[30px] mb-8  justify-start">
                <BsFillTelephoneFill className="text-2xl sm:text-1xl  md:text-3xl mr-1 text-[#EA5E53]"/>
                (21) 3030-1601
        </div>

        <div
            className="text-2xl xs:text-[20px] flex font-alef w-[300px] h-[120px] mb-3  justify-start">
            <FaMapMarkerAlt className="text-2xl sm:text-1xl  md:text-3xl mr-4 text-[#EA5E53]" />
                <h2>
                Av. Paris, n° 121, Bonsucesso <br />Rio de Janeiro, RJ CEP 21041-020
                </h2>
        </div>

    </BackgroundForms>

)
}