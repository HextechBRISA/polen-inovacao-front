"use client";
import React, { useState } from "react";
import Cards, { Focused } from "react-credit-cards-2";
import BackgroundForms from "../components/BackgroundForms";
import RegisterSuccess from "./components/RegisterSuccess";
import { validationSchema } from "./validationSchema";
import Link from "next/link";
import { z } from "zod";

export default function RegisterPage() {
  const [isRegisterSuccessfull, setIsRegisterSuccessfull] = useState(false);
  const [registerData, setRegisterData] = useState({
    email: "",
    username: "",
    password: "",
    category: "",
    course: "",
    picture: "",
    focus: "" as Focused,
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  function handleInputFocus(e) {
    const { name } = e.target;
    setRegisterData({ ...registerData, focus: name });
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setRegisterData({ ...registerData, [name]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const formattedRegisterData = {
      email: registerData.email.trim(),
      username: registerData.username.trim(),
      password: registerData.password.trim(),
      category: registerData.category.trim(),
      course: registerData.course.trim(),
      picture: registerData.picture.trim(),
    };

    try {
      validationSchema.parse(formattedRegisterData);
      setIsRegisterSuccessfull(true);
      setErrors({});
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: { [key: string]: string } = {};
        error.errors.forEach((err) => {
          fieldErrors[err.path[0]] = err.message;
        });
        setErrors(fieldErrors);
      }
    }
  }

  return (
    <>
      {isRegisterSuccessfull ? (
        <RegisterSuccess />
      ) : (
    <BackgroundForms>
      <h1 className="text-3xl font-bold text-center mb-6">Cadastre-se</h1>
      <form className="flex flex-col justify-center items-center w-full">
        
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
          onClick={handleSubmit}
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
      )}
    </>
  );
}
