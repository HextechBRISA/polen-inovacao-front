"use client"
import React from "react";
import styled from 'styled-components';
import LogoPolen from '../../../public/LogoPolen.png';
import BackgroundForms from "../components/BackgroundForms";

export default function Login()  {
    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const username = event.currentTarget.username.value;
        const password = event.currentTarget.password.value;
        const response = await fetch ('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({username, password})
        })
        
    }
    return (
   
    <BackgroundForms>
      <h1>Login</h1> 
      <LoginForm onSubmit={handleSubmit}>
        <Label htmlFor="username">Usuário</Label>
        <Input type="text" id="username" name="username" />
        <Label htmlFor="password">Senha</Label>
        <Input type="text" id="password" name="password" />
        <Button className="button">Login</Button>
        <p>Cadastre-se aqui</p>
      </LoginForm>
    </BackgroundForms>
  );
}

const LoginContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.3);
  width: 100%;
  margin: 130px auto;
  border-radius: 30px;
  padding: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Image =styled.img``;

const LoginForm = styled.form``; 

const Label = styled.label`
font-size: 16px;
margin-bottom: 5px;
`;
const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;
const Button = styled.button`
margin-bottom: 10px;
background-color: #EA5E53;
color: white;
padding: 10px 20px;
border: none;
border-radius: 5px;
cursor: pointer;
`;