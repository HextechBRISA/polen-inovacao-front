"use client";
import React from "react";
import styled from "styled-components";
import BackgroundForms from "../../../components/BackgroundForms";

export default function LoginSuccess() {
  return (
    <BackgroundForms>
      <Form>
        <h1> Login feito com sucesso!</h1>
      </Form>
    </BackgroundForms>
  );
}

const Form = styled.div`
  h1 {
    font-weight: 700;
    font-size: 35px;
    color: #423f3f;
    text-align: center;
    margin-bottom: 25px;
    margin-top: 30px;
  }

  h2 {
    font-weight: 700;
    font-size: 24px;
    color: #423f3f;
    text-align: center;
    margin-bottom: 30px;
  }

  h3 {
    font-weight: 400;
    font-size: 27px;
    color: #534f4d;
    text-align: center;
    margin-bottom: 0px;
  }
`;
