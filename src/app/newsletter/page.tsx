"use client";
import React, { useState } from "react";
import BackgroundForms from "../components/BackgroundForms";
import NewsletterSubscript from "./components/SubscriptSuccess";

const App = () => {
  const [selectedOption, setSelectedOption] = useState('');
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
    // Handle form submission
    console.log('Selected option:', selectedOption);
  };

  return (
    <>
      {isSubscriptSuccessful ? (
        <NewsletterSubscript />
      ) : (
        <div className="flex items-center text-center font-normal  text-[16px] justify-center min-h-screen ">
          <BackgroundForms>
            <form onSubmit={handleSubmit2} className=" rounded-[20px] text-center w-full max-w-sm">
              <h2 className="text-2xl font-bold ">Inscreva-se na NewsLetter<br />Eu sou:</h2>
              <div className="mb-1">
                <input
                  type="radio"
                  id="option1"
                  name="options"
                  value="Option 1"
                  checked={selectedOption === 'Option 1'}
                  onChange={handleOptionChange}
                  className="hidden"
                />
                <label
                  htmlFor="option1"
                  className={`block cursor-pointer p-2 text-center rounded-[20px] hover:bg-[#ea5e53] ${selectedOption === 'Option 1' ? 'bg-[#ea5e53] text-white' : ''}`}
                >
                  Empresa Parceira
                </label>
              </div>
              <div  className="mb-1">
                <input
                  type="radio"
                  id="option2"
                  name="options"
                  value="Option 2"
                  checked={selectedOption === 'Option 2'}
                  onChange={handleOptionChange}
                  className="hidden"
                />
                <label
                  htmlFor="option2"
                  className={`block cursor-pointer p-2 text-center rounded-[20px] hover:bg-[#ea5e53] ${selectedOption === 'Option 2' ? 'bg-[#ea5e53] text-white' : ''}`}
                >
                  Aluno
                </label>
              </div>
              <div className="mb-1">
                <input
                  type="radio"
                  id="option3"
                  name="options"
                  value="Option 3"
                  checked={selectedOption === 'Option 3'}
                  onChange={handleOptionChange}
                  className="hidden"
                />
                <label
                  htmlFor="option3"
                  className={`block cursor-pointer p-2 text-center rounded-[20px] hover:bg-[#ea5e53] ${selectedOption === 'Option 3' ? 'bg-[#ea5e53] text-white' : ''}`}
                >
                  Professor
                </label>
              </div>
              <div className="mb-1">
                <input
                  type="radio"
                  id="option4"
                  name="options"
                  value="Option 4"
                  checked={selectedOption === 'Option 4'}
                  onChange={handleOptionChange}
                  className="hidden"
                />
                <label
                  htmlFor="option4"
                  className={`block cursor-pointer p-2 text-center rounded-[20px] hover:bg-[#ea5e53] ${selectedOption === 'Option 4' ? 'bg-[#ea5e53] text-white' : ''}`}
                >

                  Aspirante a residente
                </label>
              </div>
              <div>
              </div>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Insira seu e-mail"
                className=" block  w-full cursor-pointer p-[10] text-center border  bg-gray-100 rounded-[20px] px-4 py-2 focus:outline-none focus:ring-1 focus:ring- #ccc  mb-2"
              />
              <button type="submit" onClick={handleSubmit2} className= " flex-col w-[200px] h-[30px] bg-[#EA5E53] text-white text-sm font-bold rounded-[20px] ">
                Enviar
              </button>
            </form>
          </BackgroundForms>
        </div>
      )
      }
    </>
  );
}

export default App;

/*const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  outline-color: #c0431dc3;
  border-radius: 20px;
`;*/