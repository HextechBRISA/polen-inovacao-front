"use client";
import React from "react";
import BackgroundForms from "../components/BackgroundForms";
import Link from "next/link";

export default function RegisterPage() {
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const username = event.currentTarget.username.value;
    const password = event.currentTarget.password.value;
    const response = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
  }

  return (
    <BackgroundForms>
      <h1 className="text-3xl font-bold text-center mb-6">Cadastre-se</h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center w-full"
      >
        <label htmlFor="email" className="w-full items-start font-medium mb-2">
          E-mail
        </label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Insira seu e-mail"
          className="w-full h-[40px] p-2 text-center border bg-gray-100 rounded-[50px] px-4 py-2 focus:outline-none focus:ring-1 focus:ring- #ccc mt-1 mb-4"
        />

        <label
          htmlFor="username"
          className="w-full items-start font-medium mb-2"
        >
          Usuário
        </label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Escolha um nome de usuário"
          className="w-full h-[40px] p-2 text-center border bg-gray-100 rounded-[50px] px-4 py-2 focus:outline-none focus:ring-1 focus:ring- #ccc mt-1 mb-4"
        />

        <label
          htmlFor="password"
          className="w-full items-start font-medium mb-2"
        >
          Senha
        </label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Insira sua senha"
          className="w-full h-[40px] p-2 text-center border bg-gray-100 rounded-[50px] px-4 py-2 focus:outline-none focus:ring-1 focus:ring- #ccc mt-1 mb-4"
        />

        <label
          htmlFor="password"
          className="w-full items-start font-medium mb-2"
        >
          Repita sua senha
        </label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Confirme sua senha"
          className="w-full h-[40px] p-2 text-center border bg-gray-100 rounded-[50px] px-4 py-2 focus:outline-none focus:ring-1 focus:ring- #ccc mt-1 mb-4"
        />

        <label
          htmlFor="category"
          className="w-full items-start font-medium mb-2"
        >
          Sou:
        </label>
        <select
          id="category"
          className="w-full h-[40px] p-2 text-gray-400 text-center border bg-gray-100 rounded-[50px] px-4 py-2 focus:outline-none focus:ring-1 focus:ring- #ccc mt-1 mb-4"
        >
          <option disabled hidden selected>Escolha uma categoria</option>
          <option value="Admin">Admin</option>
          <option value="Mentor">Mentor</option>
          <option value="Residente">Residente</option>
        </select>

        <label htmlFor="course" className="w-full items-start font-medium mb-2">
          Curso:
        </label>
        <select
          id="course"
          className="w-full h-[40px] p-2 text-gray-400 text-center border bg-gray-100 rounded-[50px] px-4 py-2 focus:outline-none focus:ring-1 focus:ring- #ccc mt-1 mb-4"
        >
          <option disabled hidden selected>Escolha uma área de ensino</option>
          <option value="ADS">Análise de Sistemas</option>
          <option value="CC">Ciência da Computação</option>
          <option value="ES">Engenharia de Software</option>
          <option value="SI">Sistemas de Informação</option>
        </select>

        <label
          htmlFor="picture"
          className="w-full items-start font-medium mb-2"
        >
          Foto de perfil:
        </label>
        <div className="flex items-center justify-center w-full mt-1 mb-4">
          <label
            htmlFor="dropzone-file"
            className="flex flex-auto items-center justify-center w-full h-[40px] border-2 border-white border-dashed rounded-[50px] cursor-pointer"
          >
            <p className="flex-auto text-xs text-center font-semibold">
              Fazer Upload PNG ou JPG
            </p>

            <input id="dropzone-file" type="file" className="hidden" />
          </label>
        </div>

        <button
          type="submit"
          className="shadow-md mt-2 w-[200px] h-[30px] bg-[#EA5E53] text-white text-sm font-bold rounded-[50px]"
        >
          Sign Up
        </button>

        <Link
          href={"/login"}
          className="text-center text-[15px] mt-6 underline"
        >
          Já possui uma conta? Faça Login!
        </Link>
      </form>
    </BackgroundForms>
  );
}
