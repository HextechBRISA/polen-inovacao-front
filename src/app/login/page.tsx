"use client";
import React from "react";
import BackgroundForms from "../components/BackgroundForms";
import Link from "next/link";

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
      <h1 className="text-3xl font-bold text-center mb-6">Login</h1>
      
      <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center w-full">
        <label htmlFor="username" className="w-full items-start font-medium mb-2">
          Usuário
        </label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Insira seu nome de usuário"
          className="w-full h-[40px] p-2 text-center border bg-gray-100 rounded-[50px] px-4 py-2 focus:outline-none focus:ring-1 focus:ring- #ccc mt-1 mb-4"
        /> 

        <label htmlFor="password" className="w-full items-start font-medium mb-2">
          Senha
        </label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Insira sua senha"
          className="w-full h-[40px] p-2 text-center border bg-gray-100 rounded-[50px] px-4 py-2 focus:outline-none focus:ring-1 focus:ring- #ccc mt-1 mb-4"
        />

        <button
          type="submit"
          className="shadow-md mt-2 w-[200px] h-[30px] bg-[#EA5E53] text-white text-sm font-bold rounded-[50px]"
        >
          Login
        </button>

        <Link href={"/register"}>
          <p className="text-center text-[15px] mt-6 underline">
            Ainda não possui uma conta? Cadastre-se
          </p>
        </Link>
      </form>
    </BackgroundForms>
  );
}
