"use client";
import React from "react";
import BackgroundForms from "../components/BackgroundForms";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function contactpage() {

return (
    <BackgroundForms>

        <div className="text-3xl font-bold text-center mb-6 text-[#EA5E53]">VAMOS INOVAR JUNTOS?</div>

        <div
        className="text-2xl font-alef text-center mb-6">Entre em contato conosco para ajuda, um papo ou um café:</div>

        <div   
            className="text-2xl flex items-center font-alef text-center mb-6">
                <MdEmail className="text-3xl mr-2 text-[#EA5E53]"/> 
                polen@unisuam.edu.br
        </div>

        <div 
            className="text-2xl flex items-center font-alef text-center mb-6">
                <BsFillTelephoneFill className="text-2xl mr-2 text-[#EA5E53]"/>
                (21) 3030-1601
        </div>

        <div
            className="text-2xl flex items-center font-alef text-center mb-6">
            <FaMapMarkerAlt className="text-3xl mr-2 text-[#EA5E53]" />
                <h2>
                Av. Paris, n° 121, Bonsucesso <br />Rio de Janeiro, RJ CEP 21041-020
                </h2>
        </div>

    </BackgroundForms>

)
}