"use client";
import BackgroundForms from "../components/BackgroundForms";
import React, { useEffect, useState } from "react";
import NewsletterSubscript from "./components/SubscriptSuccess";

export default function NewsLetterPage() {
  const [SSR, setSSR] = useState(false);

  useEffect(() => {
    setSSR(true);
  }, []);

  const [isSubscriptSuccessful, setIsSubscriptSuccessful] = useState(false);
  async function handleSubmit(e) {
    e.preventDefault();
    const body = {};
    setIsSubscriptSuccessful(true);
  }
  return (
    <>
      {isSubscriptSuccessful ? (
        <NewsletterSubscript />
      ) : (
        SSR && (
          <BackgroundForms>
            <div className="NewsLetterPage">
              <form>
                <h1>Inscreva-se na NewsLetter:</h1>
                <h2>Eu sou:</h2>
                <div>
                  <input
                    type="radio"
                    id="radio1"
                    name="category"
                    className="group"
                    value="empresa"
                  />
                  <label
                    htmlFor="radio1"
                    className="radio"
                    data-label="Empresa Parceira"
                  ></label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="radio2"
                    name="category"
                    className="group"
                    value="aluno"
                  />
                  <label
                    htmlFor="radio2"
                    className="radio"
                    data-label="Aluno"
                  ></label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="radio3"
                    name="category"
                    className="group"
                    value="professor"
                  />
                  <label
                    htmlFor="radio3"
                    className="radio"
                    data-label="Professor"
                  ></label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="radio4"
                    name="category"
                    className="group"
                    value="aspirante"
                  />
                  <label
                    htmlFor="radio4"
                    className="radio"
                    data-label="Aspirante a residente"
                  ></label>
                </div>
                <div>
                  <input
                    className="email"
                    type="email"
                    placeholder="Insira seu e-mail"
                  />
                </div>
              </form>
              <button type="submit" onClick={handleSubmit}>
                Enviar
              </button>
            </div>
          </BackgroundForms>
        )
      )}
    </>
  );
}
