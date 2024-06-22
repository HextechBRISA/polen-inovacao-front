"use client";
import React, { useState } from "react";
import BackgroundForms from "../components/BackgroundForms";
import NewsletterSubscript from "./components/SubscriptSuccess";
import { IoMdArrowRoundForward } from "react-icons/io";

export default function NewsletterPage() {
  const [selectedOption, setSelectedOption] = useState("");
  const [isSubscriptSuccessful, setIsSubscriptSuccessful] = useState(false);

  async function handleSubmit2(e) {
    e.preventDefault();
    const body = {};
    setIsSubscriptSuccessful(true);
  }

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Selected option:", selectedOption);
  };

  return (
    <>
      {isSubscriptSuccessful ? (
        <NewsletterSubscript />
      ) : (
        <BackgroundForms>
          <h2 className="text-2xl font-bold text-center mb-4">Inscreva-se na NewsLetter</h2>
          <h3 className="font-bold p-2 mb-2 text-left w-full max-w-sm">
            Eu sou:
          </h3>
          <form
            onSubmit={handleSubmit2}
            className="text-center w-full max-w-sm"
          >
            <div className="mb-2">
              <input
                type="radio"
                id="option1"
                name="options"
                value="Option 1"
                checked={selectedOption === "Option 1"}
                onChange={handleOptionChange}
                className="hidden"
              />
              <label
                htmlFor="option1"
                className={`block cursor-pointer p-2 text-left rounded-[20px] hover:bg-[#EE7A3C] flex ${
                  selectedOption === "Option 1" ? "bg-[#EA5E53] text-white" : ""
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
                name="options"
                value="Option 2"
                checked={selectedOption === "Option 2"}
                onChange={handleOptionChange}
                className="hidden"
              />
              <label
                htmlFor="option2"
                className={`block cursor-pointer p-2 text-left rounded-[50px] hover:bg-[#EE7A3C] flex ${
                  selectedOption === "Option 2" ? "bg-[#EA5E53] text-white" : ""
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
                name="options"
                value="Option 3"
                checked={selectedOption === "Option 3"}
                onChange={handleOptionChange}
                className="hidden"
              />
              <label
                htmlFor="option3"
                className={`block cursor-pointer p-2 text-left rounded-[50px] hover:bg-[#EE7A3C] flex ${
                  selectedOption === "Option 3" ? "bg-[#EA5E53] text-white" : ""
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
                name="options"
                value="Option 4"
                checked={selectedOption === "Option 4"}
                onChange={handleOptionChange}
                className="hidden"
              />
              <label
                htmlFor="option4"
                className={`block cursor-pointer p-2 text-left rounded-[50px] hover:bg-[#EE7A3C] flex ${
                  selectedOption === "Option 4" ? "bg-[#EA5E53] text-white" : ""
                }`}
              >
                <IoMdArrowRoundForward className="mr-1" />
                Aspirante a residente
              </label>
            </div>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Insira seu e-mail"
              className="block w-full h-[40px] p-2 text-center border bg-gray-100 rounded-[50px] px-4 py-2 focus:outline-none focus:ring-1 focus:ring- #ccc mt-4 mb-4"
            />
            <button
              type="submit"
              onClick={handleSubmit2}
              className="shadow-md mt-2 w-[200px] h-[30px] bg-[#EA5E53] text-white text-sm font-bold rounded-[50px]"
            >
              Enviar
            </button>
          </form>
        </BackgroundForms>
      )}
    </>
  );
}
