"use client";
import React from "react";
import BackgroundForms from "../../components/BackgroundForms";
import { FaCheck } from "react-icons/fa";

export default function NewsletterSubscript() {
  return (
    <BackgroundForms>
      <div className="subscript">
        <h1> Inscrição feita com sucesso!</h1>
        <FaCheck className="check-icon" />
        <h2> Aguarde... </h2>
        <h3> Entraremos em contato com você por e-mail!</h3>
      </div>
    </BackgroundForms>
  );
}

