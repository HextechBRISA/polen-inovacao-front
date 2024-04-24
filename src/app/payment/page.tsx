"use client"
import React, { useState } from 'react';
import Cards, { Focused } from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import styled from 'styled-components';
import InputMask from 'react-input-mask';

export default function PaymentPage() {
    const [cardData, setCardData] = useState({
      number: '',
      expiry: '',
      cvc: '',
      name: '',
      focus: '' as Focused,
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
  
      const body = {
        cvc: cardData.cvc,
        expiry: cardData.expiry,
        issuer: cardData.name,
        number: cardData.number,
      };
    }

  return (
    <PaymentContainer>
        <h1>Realize o pagamento para confirmar sua reserva:</h1>

        <PaymentCard>
              <Cards
                cvc={cardData.cvc}
                expiry={cardData.expiry}
                focused={cardData.focus}
                name={cardData.name}
                number={cardData.number}
              />

            <PaymentForm>
              <h2>Pagar com cartão:</h2>
              <InputMask
                mask="9999 9999 9999 9999"
                maskChar=""
                value={cardData.number}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              >
                {() => <Input type="tel" name="number" placeholder="Card Number" required />}
              </InputMask>

              <Input
                type="text"
                name="name"
                placeholder="Name"
                value={cardData.name}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                required
              />

              <div>
                <InputMask
                  mask="99/99"
                  maskChar=""
                  value={cardData.expiry}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                >
                  {() => <ExpiryInput type="tel" name="expiry" placeholder="Valid Thru" required />}
                </InputMask>

                <CVCInput
                  type="tel"
                  name="cvc"
                  placeholder="CVC"
                  value={cardData.cvc}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  required
                />
              </div>
            </PaymentForm>
          </PaymentCard>
          <div className='pix-container'>
            <input type="checkbox"/>
            <label><strong>Pagar com pix!</strong> (Seu pagamento deverá ser confirmado em até 24h)</label>
          </div>
        <button type="submit" onClick={handleSubmit}>Confirmar pagamento</button>
    </PaymentContainer>
  );
}

const PaymentContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.3);
  width: 60%;
  margin: 130px auto;
  border-radius: 20px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1, h2, label {
    font-weight: 700;
    font-size: 24px;
    color: #635A56;
    text-align: center;
    margin-bottom: 40px;
  }

  h2, label {
    font-size: 18px;
    margin-bottom: 20px;
    font-weight: 400;
  }

  button {
    width: 200px;
    height: 30px;
    background-color: #EA5E53;
    color: white;
    border: 0px;
    border-radius: 20px;
    font-family: "Alef", sans-serif;
  }

  .pix-container {
    margin-bottom: 30px;
  }

  @media (max-width: 400px) {
    width: 90%;
    padding: 10px;
      div {
        margin-bottom: 10px;
      }
    }

    @media (max-width: 570px) {
    width: 90%;
    padding: 20px;
      div {
        margin-bottom: 10px;
      }
    }

    @media (max-width: 1054px) {
      width: 80%;
    }
`;

const PaymentCard = styled.div`
  display: flex;
  margin-bottom: 30px;

  @media (max-width: 790px) {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }
`;

const PaymentForm = styled.form`
  width: 290px;
  margin: 0px 0px 0px 20px;

  @media (max-width: 790px) {
    width: 290px;
    margin: 10px 0px 0px 0px;
  }

  div {
    display: flex;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 35px;
  margin-bottom: 15px;
  padding-left: 10px;
  border-radius: 5px;
  border-width: 1px;
  border-color: #8e8e8e;
  font-size: 17px;
  &::placeholder {
    color: #8e8e8e;
  }
`;

const ExpiryInput = styled(Input)`
  width: 100%;
`;
const CVCInput = styled(Input)`
  width: 50%;
  margin-left: 15px;
`;
