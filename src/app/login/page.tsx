"use client";
import React from "react";
import BackgroundLogo from "../../components/BackgroundLogo";
import Link from "next/link";
import useLogin from "./useLogin";

export default function Login() {
  const { handleSubmit, register, errors, formErrors, onSubmit } = useLogin();

  return (
    <BackgroundLogo>
      <h1 className="text-3xl font-bold text-center mb-6">Login</h1>
      <h2 className="mb-2 text-[17px] text-center font-sans">
        É mentor ou residente Pólen?
      </h2>
      <h2 className="mb-4 text-[17px] text-center font-sans font-bold">
        Conecte-se:
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center items-center w-full"
      >
        <label htmlFor="email" className="w-full items-start font-medium mb-2">
          E-mail
        </label>
        <input
          type="text"
          id="email"
          placeholder="Insira seu e-mail"
          {...register("email")}
          className="w-full h-[40px] p-2 text-center border bg-gray-100 rounded-[50px] px-4 py-2 focus:outline-none focus:ring-1 focus:ring-gray-300 mt-1 mb-4"
        />
        {formErrors.email && (
          <p className="text-[#EA5E53] font-bold text-sm mb-4">
            {formErrors.email}
          </p>
        )}

        <label
          htmlFor="password"
          className="w-full items-start font-medium mb-2"
        >
          Senha
        </label>
        <input
          type="password"
          id="password"
          placeholder="Insira sua senha"
          {...register("password")}
          className="w-full h-[40px] p-2 text-center border bg-gray-100 rounded-[50px] px-4 py-2 focus:outline-none focus:ring-1 focus:ring-gray-300 mt-1 mb-4"
        />
        {formErrors.password && (
          <p className="text-[#EA5E53] font-bold text-sm mb-4">
            {formErrors.password}
          </p>
        )}

        <button
          type="submit"
          className="shadow-md mt-2 w-[200px] h-[30px] bg-[#EA5E53] text-white text-sm font-bold rounded-[50px]"
        >
          Entrar
        </button>

        <Link href={"/register"}>
          <p className="text-center text-[15px] mt-6 underline">
            Cadastre-se aqui
          </p>
        </Link>
      </form>
    </BackgroundLogo>
  );
}
