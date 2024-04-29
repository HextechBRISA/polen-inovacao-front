"use client";
import styled from "styled-components";
import BackgroundForms from "../../components/BackgroundForms";
import React, { useEffect, useState } from "react";
import NewsletterSubscript from "./components/SubscriptSuccess";
import ButtonStyle from "../../components/ButtonStyle";

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
            <NewsLetterPageContainer>
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
            </NewsLetterPageContainer>
          </BackgroundForms>
        )
      )}
    </>
  );
}

const NewsLetterPageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    text-align: center;
    margin: 10px 0px 15px 0px;
    font-size: 22px;
  }

  h2 {
    text-align: left;
    color: #635a56;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 15px;
  }

  .email {
    text-align: center;
    width: 100%;
    height: 35px;
    border-radius: 20px;
    margin: 10px 0px;
    font-size: 16px;
    border: 0px;
  }

  div {
    margin: 10px 0px;
  }

  form {
    width: 100%;
  }
  button {
    width: 200px;
    height: 30px;
    background-color: #ea5e53;
    color: white;
    font-size: 14px;
    font-weight: 700;
    border-radius: 20px;
    margin: 10px 0px;
  }

  /*Estilo para esconder o radio button padrão */
  input[type="radio"] {
    display: none;
  }

  /* Estilo para o rótulo do radio button */
  label.radio {
    position: relative;
    display: inline-block;
    padding-left: 30px;
    cursor: pointer;
    margin-right: 10px; /* Espaço entre os radio buttons */
  }

  /* Estilo para o círculo */
  label.radio::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 10px;
    height: 10px;
    border: 2px solid #635a56; /* Borda do círculo */
    border-radius: 50%; /* Borda arredondada */
  }

  /*Estilo para o círculo quando o radio button está marcado */
  input[type="radio"]:checked + label.radio::before {
    background-color: #635a56; /* Cor de fundo do círculo */
  }

  /* Estilo para o texto do rótulo */
  label.radio::after {
    content: attr(data-label); /* Corrigido para exibir o texto do rótulo */
    font-weight: 500;
    display: block;
    font-size: 18px;
    margin: 0px; /* Espaço após o círculo */
    color: #635a56; /* Cor do texto */
  }

  /*
<!-- Checkboxes -->
<input type="checkbox" id="checkbox1" name="checkbox" class="group">
<label for="checkbox1" class="checkbox" data-label="Opção 1"></label>

<input type="checkbox" id="checkbox2" name="checkbox" class="group">
<label for="checkbox2" class="checkbox" data-label="Opção 2"></label>

<input type="checkbox" id="checkbox3" name="checkbox" class="group">
<label for="checkbox3" class="checkbox" data-label="Opção 3"></label>

<!-- JavaScript para permitir apenas uma seleção -->
<script>
    const checkboxes = document.querySelectorAll('.group');

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            checkboxes.forEach(cb => {
                if (cb !== checkbox) {
                    cb.checked = false;
                }
            });
        });
    });
</script>*/
`;
