"use client";
import React, { useState } from "react";
import BackgroundLogo from "../../components/BackgroundLogo";
import NewsletterSubscriptSuccess from "./components/NewsletterSubscriptSuccess";
import { IoMdArrowRoundForward } from "react-icons/io";
import { z } from "zod";
import axios from "axios";
import { validationNewsletterSchema } from "./validationNewsletterSchema";

export default function NewsletterPage() {
  const [isSubscriptSuccessful, setIsSubscriptSuccessful] = useState(false);
  const [formData, setFormData] = useState({ email: "", radioOption: "" });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formattedFormData = {
      email: formData.email.trim(),
      radioOption: formData.radioOption.trim(),
    };

    try {
      validationNewsletterSchema.parse(formattedFormData);
      setErrors({});

      try {
        const response = await axios.post('/api/send-email', { email: formData.email, userType: formData.radioOption });
        setIsSubscriptSuccessful(true);
      } catch (error) {
        console.error('Erro ao enviar email:', error);
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        const formErrors: { [key: string]: string } = {};
        error.errors.forEach((err) => {
          if (err.path.length > 0) {
            formErrors[err.path[0]] = err.message;
          }
        });
        setErrors(formErrors);
      }
    }
  };

  return (
    <>
      {isSubscriptSuccessful ? (
        <NewsletterSubscriptSuccess />
      ) : (
        <BackgroundLogo>
          <h2 className="text-2xl font-bold text-center mb-4">
            Inscreva-se na Newsletter
          </h2>
          <h3 className="font-bold p-2 mb-2 text-left w-full max-w-sm">
            Eu sou:
          </h3>
          <form onSubmit={handleSubmit} className="text-center w-full max-w-sm">
            <>
              <div className="mb-2">
                <input
                  type="radio"
                  id="option1"
                  name="radioOption"
                  value="option1"
                  checked={formData.radioOption === "option1"}
                  onChange={handleChange}
                  className="hidden"
                />
                <label
                  htmlFor="option1"
                  className={`cursor-pointer p-2 text-left rounded-[20px] hover:bg-[#EE7A3C] flex ${
                    formData.radioOption === "option1"
                      ? "bg-[#EA5E53] text-white"
                      : ""
                  }`}
                >
                  <IoMdArrowRoundForward className="mr-1" />
                  Empresa Parceira
                </label>
              </div>
              <div className="mb-2">
                <input
                  type="radio"
                  id="option2"
                  name="radioOption"
                  value="option2"
                  checked={formData.radioOption === "option2"}
                  onChange={handleChange}
                  className="hidden"
                />
                <label
                  htmlFor="option2"
                  className={` cursor-pointer p-2 text-left rounded-[50px] hover:bg-[#EE7A3C] flex ${
                    formData.radioOption === "option2"
                      ? "bg-[#EA5E53] text-white"
                      : ""
                  }`}
                >
                  <IoMdArrowRoundForward className="mr-1" />
                  Aluno
                </label>
              </div>
              <div className="mb-2">
                <input
                  type="radio"
                  id="option3"
                  name="radioOption"
                  value="option3"
                  checked={formData.radioOption === "option3"}
                  onChange={handleChange}
                  className="hidden"
                />
                <label
                  htmlFor="option3"
                  className={` cursor-pointer p-2 text-left rounded-[50px] hover:bg-[#EE7A3C] flex ${
                    formData.radioOption === "option3"
                      ? "bg-[#EA5E53] text-white"
                      : ""
                  }`}
                >
                  <IoMdArrowRoundForward className="mr-1" />
                  Professor
                </label>
              </div>
              <div className="mb-2">
                <input
                  type="radio"
                  id="option4"
                  name="radioOption"
                  value="option4"
                  checked={formData.radioOption === "option4"}
                  onChange={handleChange}
                  className="hidden"
                />
                <label
                  htmlFor="option4"
                  className={` cursor-pointer p-2 text-left rounded-[50px] hover:bg-[#EE7A3C] flex ${
                    formData.radioOption === "option4"
                      ? "bg-[#EA5E53] text-white"
                      : ""
                  }`}
                >
                  <IoMdArrowRoundForward className="mr-1" />
                  Aspirante à residente
                </label>
              </div>
              {errors.radioOption && (
                <p className="text-[#EA5E53] font-bold text-sm">
                  {errors.radioOption}
                </p>
              )}
            </>
            <>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Insira seu e-mail"
                className="block w-full h-[40px] p-2 text-center border bg-gray-100 rounded-[50px] px-4 py-2 focus:outline-none focus:ring-1 focus:ring- #ccc mt-4 mb-4"
              />
              {errors.email && (
                <p className="text-[#EA5E53] font-bold text-sm mb-4">
                  {errors.email}
                </p>
              )}
            </>
            <button
              type="submit"
              className="shadow-md mt-2 w-[200px] h-[30px] bg-[#EA5E53] text-white text-sm font-bold rounded-[50px]"
            >
              Enviar
            </button>
          </form>
        </BackgroundLogo>
      )}
    </>
  );
}
