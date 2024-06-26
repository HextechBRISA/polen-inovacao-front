"use client";
import React, { useState } from "react";
import Cards, { Focused } from "react-credit-cards-2";
import BackgroundForms from "../components/BackgroundForms";
import RegisterSuccess from "./components/RegisterSuccess"
import { validationSchema } from "./validationSchema"
import { z } from "zod";

export default function RegisterPage() {
  const [SSR, setSSR] = useState(false);
  const [isRegisterSuccessfull, setIsRegisterSuccessfull] = useState(false);
  const [cardData, setCardData] = useState({
    email: "",
    username: "",
    password: "",
    category: "",
    course: "",
    picture: "",
    focus: "" as Focused,
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [payWithPix, setPayWithPix] = useState(false);
  const [pixData, setPixData] = useState({
    chave: "sua-chave-pix",
    valor: "00.00",
    recebedor: "Nome do Recebedor",
  });

  function handleInputFocus(e) {
    const { name } = e.target;
    setCardData({ ...cardData, focus: name });
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setCardData({ ...cardData, [name]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (payWithPix) {
      setIsRegisterSuccessfull(true);
      return;
    }

    const formattedCardData = {
      email: cardData.email.trim(),
      username: cardData.username.trim(),
      password: cardData.password.trim(),
      category: cardData.category.trim(),
      course: cardData.course.trim(),
      picture: cardData.picture.trim(),
    };

    try {
      validationSchema.parse(formattedCardData);
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
      <h1 className="text-3xl font-bold text-center mb-10">Cadastre-se</h1>
      <form className="flex flex-col">

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
          className="text-xs bg-gray-100 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full mb-4"
          >
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
        className=" text-xs bg-gray-100 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full mb-4"
          >
            <option selected> Escolha uma área de ensino </option>

            <option value="ADS">Análise de Sistemas</option>

            <option value="CC">Ciência da Computação</option>

            <option value="ES">Engenharia de Software</option>

            <option value="SI">Sistemas de Informação</option>

          </select>

        <label htmlFor="função" className="text-gray-700 font-medium mb-2">
          Foto de perfil:
        </label>

          <div className="flex items-center justify-center w-full">
            
            <label htmlFor="dropzone-file" className="flex flex-auto items-center justify-center w-full h-12 border-2 border-gray-500 border-dashed rounded-md cursor-pointer">
              <div className="flex flex-col items-center">
            
                <p className=" flex-auto text-xs text-gray-700">

                <span className=" font-semibold">Click to upload </span> or drag and drop</p>
                
                <p className=" text-xs text-gray-600"> PNG or JPG </p>
              
              </div>
            
            <input id="dropzone-file" type="file" className="hidden" />
            
            </label>

        </div>

          <div>
          <button
          type="submit"
          onClick={handleSubmit}
          className="w-full h-[30px] bg-[#EA5E53] text-gray-100 text-sm font-bold rounded-[20px] my-2"
          >
          Sign Up
          </button>
          </div>

          
          <button
          type="submit"
          className="w-full h-[30px] text-gray-700 text-xs font-bold rounded-[20px] my-0 underline"
          >
          Já possui uma conta? Faça Login
          </button>

      </form>

    </BackgroundForms>
      )}
    </>
  );
}