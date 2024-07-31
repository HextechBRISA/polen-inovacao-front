"use client";
import React, { useState, useEffect } from "react";
import Cards, { Focused } from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import InputMask from "react-input-mask";
import QRCode from "qrcode.react";
import {
  PaymentContainer,
  PaymentCard,
  Input,
  ExpiryInput,
  CVCInput,
  PaymentPix,
  PaymentDeposit,
} from "./style";
import PaymentSuccess from "./components/PaymentSuccess";
import { cardSchema } from "./validationPaymentSchema";
import { z } from "zod";
import Image from "next/image";
import PaymentIcon from "../../../public/PaymentIcon.png";
import { FaRegCopy } from "react-icons/fa";
import { CSSTransition } from "react-transition-group";
import Swal from "sweetalert2";

export default function PaymentPage() {
  const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);
  const [cardData, setCardData] = useState({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
    focus: "" as Focused,
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [paymentMethod, setPaymentMethod] = useState<string | null>(null);
  const [pixData, setPixData] = useState({
    chave: "sua-chave-pix",
    valor: "00.00",
    recebedor: "Nome do Recebedor",
  });
  const [valorReserva, setValorReserva] = useState<number>(0);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const valorReservaParam = params.get("valorReserva");
    if (valorReservaParam) {
      const valor = Number(valorReservaParam);
      setValorReserva(valor);
      setPixData((prevData) => ({
        ...prevData,
        valor: valor.toFixed(2).replace(".", ","),
      }));
    }
  }, []);

  function handleInputFocus(e: React.FocusEvent<HTMLInputElement>) {
    const { name } = e.target;
    setCardData({ ...cardData, focus: name as Focused });
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setCardData({ ...cardData, [name]: value });
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!paymentMethod) {
      Swal.fire({
        icon: "error",
        title: "Erro",
        text: "Você precisa selecionar uma opção de pagamento!",
        confirmButtonText: "Ok",
        confirmButtonColor: "#EA5E53",
      });
      return;
    }

    if (paymentMethod === "pix" || paymentMethod === "deposit") {
      setIsPaymentSuccessful(true);
      return;
    }

    const formattedCardData = {
      number: cardData.number.trim(),
      expiry: cardData.expiry.trim(),
      cvc: cardData.cvc.trim(),
      name: cardData.name.trim(),
    };

    try {
      cardSchema.parse(formattedCardData);
      setIsPaymentSuccessful(true);
      setErrors({});
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: { [key: string]: string } = {};
        error.errors.forEach((err) => {
          fieldErrors[err.path[0]] = err.message;
        });
        setErrors(fieldErrors);
      }
    }
  }

  const pixQRCodeData = `00020126580014BR.GOV.BCB.PIX0114${pixData.chave}5204000053039865802BR5925${pixData.recebedor}6009SAO PAULO61080540900062070503***6304`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(pixQRCodeData).then(
      () => {
        Swal.fire({
          icon: "success",
          title: "Código PIX copiado!",
          text: "O código PIX foi copiado para a área de transferência.",
          confirmButtonText: "OK",
          confirmButtonColor: "#EA5E53",
        });
      },
      (err) => {
        Swal.fire({
          icon: "error",
          title: "Falha ao copiar",
          text: "Não foi possível copiar o código PIX. Por favor, tente novamente.",
          confirmButtonText: "OK",
          confirmButtonColor: "#EA5E53",
        });
      }
    );
  };

  return (
    <>
      {isPaymentSuccessful ? (
        <PaymentSuccess />
      ) : (
        <PaymentContainer>
          <Image
            src={PaymentIcon}
            width={80}
            height={80}
            alt="Payment Icon"
            className="mb-6"
          />
          <h1 className="font-bold text-center text-xl mb-2">
            Realize o pagamento para confirmar sua reserva
          </h1>

          <h2 className="font-normal text-center text-lg mb-8">
            Valor da reserva: R$ {pixData.valor}
          </h2>

          <div className="text-center">
            <div className="w-[300px] xs:w-full text-left mb-6 flex justify-start items-center">
              <input
                type="checkbox"
                id="cardRadio"
                name="paymentMethod"
                className="mr-2 group"
                checked={paymentMethod === "card"}
                onChange={() => setPaymentMethod("card")}
              />
              <label htmlFor="cardRadio" className="cursor-pointer checkbox">
                Pagar com cartão
              </label>
            </div>

            <CSSTransition
              in={paymentMethod === "card"}
              timeout={300}
              classNames="payment-transition"
              unmountOnExit
            >
              <PaymentCard>
                <div className="card-container">
                  <Cards
                    cvc={cardData.cvc}
                    expiry={cardData.expiry}
                    focused={cardData.focus}
                    name={cardData.name}
                    number={cardData.number}
                  />
                </div>

                <form className="w-72 mt-4" onSubmit={handleSubmit}>
                  <div className="mb-1">
                    <InputMask
                      mask="9999 9999 9999 9999"
                      maskChar=""
                      value={cardData.number}
                      onChange={handleInputChange}
                      onFocus={handleInputFocus}
                    >
                      {() => (
                        <div>
                          <Input
                            type="tel"
                            name="number"
                            placeholder="Número do cartão"
                            required
                          />
                          {errors.number && (
                            <p className="text-[#EA5E53] font-bold text-sm">
                              {errors.number}
                            </p>
                          )}
                        </div>
                      )}
                    </InputMask>
                  </div>

                  <div className="mb-1">
                    <Input
                      type="text"
                      name="name"
                      placeholder="Nome no cartão"
                      value={cardData.name}
                      onChange={handleInputChange}
                      onFocus={handleInputFocus}
                      required
                    />
                    {errors.name && (
                      <p className="text-[#EA5E53] font-bold text-sm">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div className="flex justify-center xs:w-full mb-4">
                    <div className="mr-2">
                      <InputMask
                        mask="99/99"
                        maskChar=""
                        value={cardData.expiry}
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}
                      >
                        {() => (
                          <>
                            <ExpiryInput
                              type="tel"
                              name="expiry"
                              placeholder="Validade"
                              required
                            />
                            {errors.expiry && (
                              <p className="text-[#EA5E53] font-bold text-sm">
                                {errors.expiry}
                              </p>
                            )}
                          </>
                        )}
                      </InputMask>
                    </div>

                    <div>
                      <InputMask
                        mask="999"
                        maskChar=""
                        value={cardData.cvc}
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}
                      >
                        {() => (
                          <>
                            <CVCInput
                              type="tel"
                              name="cvc"
                              placeholder="CVC"
                              value={cardData.cvc}
                              onChange={handleInputChange}
                              onFocus={handleInputFocus}
                              required
                            />
                            {errors.cvc && (
                              <p className="text-[#EA5E53] font-bold text-sm">
                                {errors.cvc}
                              </p>
                            )}
                          </>
                        )}
                      </InputMask>
                    </div>
                  </div>
                </form>
              </PaymentCard>
            </CSSTransition>

            <div className="w-[300px] xs:w-full text-left mb-6 flex justify-start items-center">
              <input
                type="checkbox"
                id="pixRadio"
                name="paymentMethod"
                className="mr-2 group"
                checked={paymentMethod === "pix"}
                onChange={() => setPaymentMethod("pix")}
              />
              <label htmlFor="pixRadio" className="cursor-pointer checkbox">
                Pagar com PIX
              </label>
            </div>

            <CSSTransition
              in={paymentMethod === "pix"}
              timeout={300}
              classNames="payment-transition"
              unmountOnExit
            >
              <PaymentPix>
                <div className="flex items-center justify-center mt-2 mb-5">
                  <QRCode value={pixQRCodeData} size={150} />
                </div>
                <div className="text-center mt-4 flex justify-center">
                  <FaRegCopy className="mr-2" />
                  <button
                    onClick={copyToClipboard}
                    className="mb-4 rounded-full font-bold"
                  >
                    Copiar código Pix
                  </button>
                </div>
              </PaymentPix>
            </CSSTransition>

            <div className="w-[300px] xs:w-full text-left mb-6 flex justify-start items-center">
              <input
                type="checkbox"
                id="depositRadio"
                name="paymentMethod"
                className="mr-2 group"
                checked={paymentMethod === "deposit"}
                onChange={() => setPaymentMethod("deposit")}
              />
              <label htmlFor="depositRadio" className="cursor-pointer checkbox">
                Pagar por transferência bancária
              </label>
            </div>

            <CSSTransition
              in={paymentMethod === "deposit"}
              timeout={300}
              classNames="payment-transition"
              unmountOnExit
            >
              <PaymentDeposit />
            </CSSTransition>
          </div>

          <div className="text-center mt-4">
            <button
              type="button"
              onClick={() => {
                handleSubmit({
                  preventDefault: () => {},
                } as React.FormEvent<HTMLFormElement>);
              }}
              className="shadow-md w-[200px] h-[30px] bg-[#EA5E53] text-white text-sm font-bold rounded-[50px]"
            >
              Confirmar pagamento
            </button>
          </div>
        </PaymentContainer>
      )}
    </>
  );
}
