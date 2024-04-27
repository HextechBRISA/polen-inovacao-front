"use client";
import React from "react";
import styled from "styled-components";
import BackgroundForms from "../components/BackgroundForms";
import ButtonStyle from "../components/ButtonStyle";

export default function Login() {
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const username = event.currentTarget.username.value;
    const password = event.currentTarget.password.value;
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
  }
  return (
    <BackgroundForms>
      <h1>Login</h1>
      <LoginForm onSubmit={handleSubmit}>
        <Label htmlFor="username">Usuário</Label>
        <Input type="text" id="username" name="username" />
        <Label htmlFor="password">Senha</Label>
        <Input type="password" id="password" name="password" />
        <ButtonStyle>Entrar</ButtonStyle>
        <Link href={"/register"}>Não possui uma conta? Cadastre-se aqui!</Link>
      </LoginForm>
    </BackgroundForms>
  );
}

const LoginForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

const Link = styled.a`
  color: #635A56;
  font-size: 15px;
  text-decoration: underline;
  margin-top: 10px;
  cursor: pointer;
`;

const Label = styled.label`
  width: 100%;
  font-size: 16px;
  margin-bottom: 5px;
  text-align: left;
  color: #635A56;
  font-size: 15px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  outline-color: #c0431dc3;
  border-radius: 20px;
`;
