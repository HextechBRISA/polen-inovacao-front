"use client";
import React from "react";
import BackgroundForms from "../../components/BackgroundForms";
import { FaCheck } from "react-icons/fa";

export default function NewsletterSubscript() {
  return (
    <BackgroundForms>
      <div className="flex flex-col items-center justify-center ">
        <h1 className=" font-bold text-center  sm:text-base md:text-xl lg:text-2xl"> Inscrição feita com sucesso!</h1>
        <FaCheck className="m-4 text-5xl text-green-700" />
        <h2 className=" font-bold text-center sm:text-base md:text-xl lg:text-2xl"> Aguarde... </h2>
        <h3 className="font-normal text-center sm:text-base md:text-xl lg:text-2xl"> Entraremos em contato com você por e-mail!</h3>
      </div>
    </BackgroundForms>
  );
}

