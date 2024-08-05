"use client";
import React from "react";
import BackgroundLogo from "../../../components/BackgroundLogo";
import { FaCheck } from "react-icons/fa";

export default function NewsletterSubscriptSuccess() {
  return (
    <BackgroundLogo>
      <h1 className="font-bold text-center text-xl mb-0">Inscrição feita com sucesso!</h1>
      <FaCheck className="text-green-500 text-2xl my-5" />
      <h2 className="font-bold text-center text-lg mb-5">Aguarde...</h2>
      <h2 className="font-normal text-center text-lg mb-5">
        Entraremos em contato com você por e-mail!
      </h2>
    </BackgroundLogo>
  );
}
