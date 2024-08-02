import React from 'react';
import Image from "next/image";
import FavelaInnovatesImage from "../../../public/FavelaInnovatesImage.png";

export default function FavelaInnovates() {
  return (
    <div className="flex min-h-screen">
      <div className="w-1/2 p-10 flex flex-col justify-center items-end">
        <div className="text-right">
          <h3 className="text-3xl font-bold mb-4">Título da Div</h3>
          <p className="mb-6">Este é o texto dentro da div. Ele está posicionado à direita.</p>
          <div>
            <button className="w-[200px] h-[30px] bg-[#EA5E53] text-white text-sm font-bold rounded-[50px] mr-2">Botão 1</button>
            <button className="w-[200px] h-[30px] bg-[#EA5E53] text-white text-sm font-bold rounded-[50px]rounded">Botão 2</button>
          </div>
        </div>
      </div>
      <div className="w-1/2 p-10 flex flex-col justify-center items-start">
        <div className="flex flex-wrap">
          <Image
            src={FavelaInnovatesImage}
            alt="Imagem 1"
            className="w-32 h-32 rounded-full m-2"
          />
          
        </div>
      </div>
    </div>
    )
};