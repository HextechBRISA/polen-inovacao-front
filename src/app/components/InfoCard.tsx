import React from "react";
import TechIllustration from "../../../public/Techillustration.png";
import Image from "next/image";

export default function InfoCard() {
  return (
    <div className="w-50% h-[220px] bg-white bg-opacity-30 p-6 ml-4 mr-4 rounded-lg shadow-md flex items-center justify-center animate__animated animate__pulse">
      <div className="mr-4">
        <Image
          src={TechIllustration}
          alt="Logo Polen"
          className="w-48"
        />
      </div>
      <div className="w-64 h-48 overflow-scroll">
        <h1 className="text-xl text-15px font-bold mb-2 mt-2 text-[#EA5E53]">
          Nós somos o Pólen de Inovação!
        </h1>
        <p className="text-white text-sm md:text-base leading-normal">
          Aqui você encontra “O” local perfeito para transformar seus projetos.
          Com a ajuda do nosso time, empreender fica mais simples e fácil. Você
          pode chegar no Pólen com uma ideia, e nós vamos te ajudar a sair com
          um negócio real, rentável e escalável.
        </p>
      </div>
    </div>
  );
}
