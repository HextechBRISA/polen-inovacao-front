import React from "react";
import TechIllustration from "../../public/Techillustration.png";
import Image from "next/image";

export default function InfoCard() {
  return (
    <div className="w-[50%] sm:w-[100%] sm:mb-6 h-[220px] bg-[#eadcd3] bg-opacity-50 p-6 mr-4 sm:mr-0 rounded-lg shadow-md flex items-center justify-center animate__animated animate__pulse">
      <div className="mr-4">
        <Image
          src={TechIllustration}
          alt="Logo Polen"
          className="w-48"
        />
      </div>
      <div className="w-60 h-48 overflow-scroll">
        <h1 className="text-[20px] xs:text-[18px] font-sans font-bold mb-4 mt-2 uppercase leading-tight">
          Somos o Pólen <br/> de Inovação!
        </h1>
        <p className="text-sm md:text-base leading-normal">
          Aqui você encontra “O” local perfeito para transformar seus projetos.
          Com a ajuda do nosso time, empreender fica mais simples e fácil. Você
          pode chegar no Pólen com uma ideia, e nós vamos te ajudar a sair com
          um negócio real, rentável e escalável.
        </p>
      </div>
    </div>
  );
}
