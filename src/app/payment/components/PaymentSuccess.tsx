import React from "react";
import { FaCheck } from "react-icons/fa";

export default function PaymentSuccess() {
  return (
    <div className="bg-[#eadcd3] bg-opacity-50 mt-32 mx-auto rounded-2xl p-12 flex flex-col items-center justify-center shadow-md w-1/2 md:w-1/2 xs:w-4/5 sm:p-5">
      <h1 className="font-bold text-center text-xl mb-0">Reserva feita com sucesso!</h1>
      <FaCheck className="text-green-500 text-2xl my-5" />
      <h2 className="font-normal text-center text-lg mb-5">Estamos processando seu pagamento...</h2>
      <h2 className="font-normal text-center text-lg mb-5">Você receberá um e-mail informando quando ele for confirmado.</h2>
      <h1 className="font-bold text-center text-xl mb-0">Obrigada!</h1>
    </div>
  );
};
