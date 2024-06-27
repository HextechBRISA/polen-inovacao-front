"use client";
import React, { useState } from "react";
import BackgroundForms from "../components/BackgroundForms";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import validationLoginSchema from "./validationLoginSchema";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function Login() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const [formErrors, setFormErrors] = useState<{
    email?: string;
    password?: string;
  }>({});
  const router = useRouter();

  const onSubmit = async (data) => {
    try {
      const validatedData = validationLoginSchema.parse(data);
      console.log("Dados válidos:", validatedData);
      handleLoginSuccess();
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors = {};
        error.errors.forEach((err) => {
          fieldErrors[err.path[0]] = err.message;
        });
        setFormErrors(fieldErrors);
        console.error("Validation errors:", fieldErrors);
      } else {
        console.error("Error submitting form:", error);
      }
    }
  };

  const handleLoginSuccess = () => {
    toast.success("Login feito com sucesso!", {
      onClose: () => router.push("/resident"),
      autoClose: 1000,
    });
  };

  return (
    <BackgroundForms>
      <h1 className="text-3xl font-bold text-center mb-6">Login</h1>
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
          className="w-full h-[40px] p-2 text-center border bg-gray-100 rounded-[50px] px-4 py-2 focus:outline-none focus:ring-1 focus:ring- #ccc mt-1 mb-4"
        />
        {formErrors.email && (
          <p className="text-[#EA5E53] font-bold text-sm xs:mb-4">
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
          className="w-full h-[40px] p-2 text-center border bg-gray-100 rounded-[50px] px-4 py-2 focus:outline-none focus:ring-1 focus:ring- #ccc mt-1 mb-4"
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
    </BackgroundForms>
  );
}
