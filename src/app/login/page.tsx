"use client";
import React from "react";
import BackgroundForms from "../components/BackgroundForms";

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
      <h1 className="text-3xl font-bold text-center mb-10">Login</h1>
      <form onSubmit={handleSubmit} className="flex flex-col">
        {" "}
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
        <button
          type="submit"
          className="w-[200px] h-[30px] bg-[#EA5E53] text-white text-sm font-bold rounded-[20px] my-2"
        >
          Login
        </button>
        <p className="text-center text-gray-500 mt-4">Cadastre-se aqui</p>
      </form>
    </BackgroundForms>
  );
}
