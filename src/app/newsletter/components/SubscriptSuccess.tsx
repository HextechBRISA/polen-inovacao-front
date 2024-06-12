"use client";
import React from "react";
import styled from "styled-components";
import BackgroundForms from "../../components/BackgroundForms";
import { FaCheck } from "react-icons/fa";

export default function NewsletterSubscript() {
  return (
    <BackgroundForms>
      <Form>
        <h1> Inscrição feita com sucesso!</h1>
        <FaCheck className="check-icon" />
        <h2> Aguarde... </h2>
        <h3> Entraremos em contato com você por e-mail!</h3>
      </Form>
    </BackgroundForms>
  );
}

const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-weight: 700;
    font-size: 24px;
    color: #423f3f;
    text-align: center;
    margin: 20px 0px 10px 0px;
  }

  h2 {
    font-weight: 700;
    font-size: 24px;
    color: #423f3f;
    text-align: center;
    margin-bottom: 20px;
  }

  h3 {
    font-weight: 400;
    font-size: 20px;
    color: #534f4d;
    text-align: center;
    margin-bottom: 10px;
  }

  .check-icon {
    color: green;
    font-size: 30px;
    margin: 20px 0px;
  }
`;
