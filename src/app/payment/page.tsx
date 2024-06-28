"use client";
import React, { useState } from "react";
import Cards, { Focused } from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import InputMask from "react-input-mask";
import QRCode from "qrcode.react";
import {
  PaymentContainer,
  PaymentCard,
  PaymentForm,
  Input,
  ExpiryInput,
  CVCInput,
  PaymentPix,
} from "./style";
import PaymentSuccess from "./components/PaymentSuccess";
import { cardSchema } from "./validationPaymentSchema";
import { z } from "zod";

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
  const [payWithPix, setPayWithPix] = useState(false);
  const [pixData, setPixData] = useState({
    chave: "sua-chave-pix",
    valor: "00.00",
    recebedor: "Nome do Recebedor",
  });

  function handleInputFocus(e) {
    const { name } = e.target;
    setCardData({ ...cardData, focus: name });
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setCardData({ ...cardData, [name]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (payWithPix) {
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

  return (
    <>
      {isPaymentSuccessful ? (
        <PaymentSuccess />
      ) : (
        <PaymentContainer>
          <h1 className="font-bold text-center text-xl mb-2">
            Realize o pagamento para confirmar sua reserva
          </h1>

          <h2 className="font-normal text-center text-lg mb-8">
            Valor da reserva: R$ {pixData.valor}
          </h2>

          <PaymentCard>
            {payWithPix ? (
              <div className="flex items-center justify-center mb-4">
                <QRCode value={pixQRCodeData} size={200} />
              </div>
            ) : (
              <>
                <h3 className="font-normal text-base mb-2">
                  Pagar com cartão:
                </h3>
                <Cards
                  cvc={cardData.cvc}
                  expiry={cardData.expiry}
                  focused={cardData.focus}
                  name={cardData.name}
                  number={cardData.number}
                />
              </>
            )}

            <PaymentForm>
              {!payWithPix && (
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
              )}

              {!payWithPix && (
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
              )}

              {!payWithPix && (
                <div className="flex mb-4">
                  <div className="mr-2">
                    <InputMask
                      mask="99/99"
                      maskChar=""
                      value={cardData.expiry}
                      onChange={handleInputChange}
                      onFocus={handleInputFocus}
                    >
                      {() => (
                        <div>
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
                        </div>
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
                        <div>
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
                        </div>
                      )}
                    </InputMask>
                  </div>
                </div>
              )}
            </PaymentForm>
          </PaymentCard>

          <PaymentPix>
            <input
              type="checkbox"
              id="pixCheckbox"
              className="group"
              onChange={(e) => setPayWithPix(e.target.checked)}
            />
            <label
              htmlFor="pixCheckbox"
              className="checkbox cursor-pointer"
              data-label="Pagar com PIX! (Seu pagamento deverá ser confirmado em até 24h)"
            ></label>
          </PaymentPix>

          <button
            type="submit"
            onClick={handleSubmit}
            className="w-52 h-7 bg-[#ea5e53] text-white border-0 rounded-full"
          >
            Confirmar pagamento
          </button>
        </PaymentContainer>
      )}
    </>
  );
}
