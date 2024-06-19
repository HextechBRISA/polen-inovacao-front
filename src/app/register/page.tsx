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
      <h1 className="text-3xl font-bold text-center mb-10"> Cadastre-se </h1>
      <form onSubmit={handleSubmit} className="flex flex-col">
        {" "}

        <label htmlFor="Email" className="text-gray-700 font-medium mb-2">
          Email
        </label>
        <input
          type="text"
          id="Email"
          name="Email"
          className="bg-gray-100 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full mb-4"
        />

        <label htmlFor="username" className="text-gray-700 font-medium mb-2">
          Usuário
        </label>
        <input
          type="text"
          id="username"
          name="username"
          className="bg-gray-100 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full mb-4"/>

        <label htmlFor="password" className="text-gray-700 font-medium mb-2">
          Senha
        </label>

        <input
          type="password"
          id="password"
          name="password"
          className="bg-gray-100 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full mb-4"/>

        <label htmlFor="função" className="text-gray-700 font-medium mb-2">
          Sou:
        </label>
          <select id="função" className="text-sm bg-gray-100 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full mb-4">
            <option selected> Escolher Categoria </option>
            <option value="Admin">Admin</option>
            <option value="Mentor">Mentor</option>
            <option value="Residente">Residente</option>
          </select>

          <label className="text-sm text-gray-700 font-medium mb-1" htmlFor="user_avatar"> Foto de Perfil </label>
          
          <input className="text-center border rounded-md dark:text-gray-800 dark:bg-orange-400 dark:border-orange-600" id="user_avatar" type="file"/>

            <p className="mt-1 mb-3 text-sm text-gray-700" id="user_avatar_help ">Utilizado para confirmação da sua identidade!</p>

            <button type="submit" className="text-gray-100 bg-red-500 bg-opacity-75 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center me-2 mb-2">Confirmar cadastro</button>

            <button type="submit" className="text-gray-700 underline rounded-lg px-4 py-2 text-center m-2">
              Já possui uma conta? Faça Login !
            </button>

      </form>
    </BackgroundForms>
  );
}
