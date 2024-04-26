import React from "react";
import { FaCheck } from "react-icons/fa";
import { PaymentSuccessContainer } from "../style";

export default function PaymentSuccess() {
  return (
    <PaymentSuccessContainer>
      <h1>Reserva feita com sucesso!</h1>
      <FaCheck className="check-icon" />
      <h2>Estamos processando seu pagamento...</h2>
      <h2>Você receberá um e-mail informando quando ele for confirmado.</h2>
      <h1>Obrigada!</h1>
    </PaymentSuccessContainer>
  );
}