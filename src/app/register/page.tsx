"use client";
import React from "react";
import BackgroundForms from "../components/BackgroundForms";

export default function Cadastro() {
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
      <h1 className="text-3xl font-bold text-center mb-10">Cadastre-se</h1>
      <form onSubmit={handleSubmit} className="flex flex-col">
        {" "}

        <label htmlFor="email" className="text-gray-700 font-medium mb-2">
          E-mail
        </label>
        <input
          type="text"
          id="email"
          name="email"
          className="bg-gray-100 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full mb-4"
        />

        <label htmlFor="username" className="text-gray-700 font-medium mb-2">
          Usuário
        </label>
        <input
          type="text"
          id="username"
          name="username"
          className="bg-gray-100 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full mb-4"
        />

        <label htmlFor="password" className="text-gray-700 font-medium mb-2">
          Senha
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="bg-gray-100 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full mb-4"
        />

        <label htmlFor="password" className="text-gray-700 font-medium mb-2">
          Repita sua senha
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="bg-gray-100 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full mb-4"
        />
        
        <label htmlFor="função" className="text-gray-700 font-medium mb-2">
          Sou:
        </label>
          <select 
        id="função" 
        className="text-xs bg-gray-100 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full mb-4">
            <option selected> Escolher uma Categoria </option>
            <option value="Admin">Admin</option>
            <option value="Mentor">Mentor</option>
            <option value="Residente">Residente</option>
          </select>

        <label htmlFor="função" className="text-gray-700 font-medium mb-2">
          Curso:
        </label>
          <select 
        id="função" 
        className=" text-xs bg-gray-100 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full mb-4">
            <option selected> Escolha uma área de ensino </option>
            <option value="ADS">Análise de Sistemas</option>
            <option value="CC">Ciência da Computação</option>
            <option value="ES">Engenharia de Software</option>
            <option value="SI">Sistemas de Informação</option>
          </select>

        <label htmlFor="função" className="text-gray-700 font-medium mb-2">
          Foto de perfil:
        </label>

        <button
          type="submit"
          className="w-[200px] h-[30px] bg-[#EA5E53] text-gray-100 text-sm font-bold rounded-[20px] my-2"
        >
          Sign Up
        </button>

        <button
          type="submit"
          className="w-[200px] h-[30px] text-gray-700 text-xs font-bold rounded-[20px] my-0 underline"
        >
          Já possui uma conta? Faça Login
        </button>

      </form>
    </BackgroundForms>
  );
}