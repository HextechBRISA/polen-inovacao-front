"use client"
import React from "react";
import styled from "styled-components";
import BackgroundForms from "../components/BackgroundForms";

export default function NewsLetterPage() {
    return (
    <BackgroundForms>
        <NewsLetterPageContainer>
        <form> 
        <div><h1>Inscreva-se</h1></div>
        <div><h2>Eu sou:</h2></div>
            <div><input type="checkbox" id="checkbox1" name="checkbox" className="group"/>
            <label htmlFor="checkbox1" className="checkbox" data-label="Empresa Parceira"></label></div>
            <div><input type="checkbox" id="checkbox2" name="checkbox" className="group"/>
            <label htmlFor="checkbox2" className="checkbox" data-label="Aluno"></label></div>
            <div><input type="checkbox" id="checkbox3" name="checkbox" className="group"/>
            <label htmlFor="checkbox3" className="checkbox" data-label="Professor"></label></div>
            <div><input type="checkbox" id="checkbox4" name="checkbox" className="group"/><label htmlFor="checkbox4" className="checkbox" data-label="Aspirante a residente"></label></div>
            <div><label></label><input className="email" type="email" placeholder ="Insira seu e-mail"/></div>
        </form>
            <button type="submit">Enviar</button>
        </NewsLetterPageContainer>
    </BackgroundForms>
    );
    }
const NewsLetterPageContainer= styled.div`
    width: 60%;
    margin: 0px auto;
    border-radius: 20px;
    padding: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: "Alef", sans-serif;
    font-weight: 100;
    ;
    button {
        width: 300px;
        height: 30px;
        background-color: #EA5E53;
        color: white;
        border: 0px;
        border-radius: 20px;
        font-size: 24px;
        font-family: "Alef", sans-serif;
        margin-top:10px;
        margin-bottom:20px;
    }
    h1{
        font-size: 30px;
        text-align: center;
    }
    h2{
        font-size: 24px;
        text-align: left;
        color: #635A56;
        font-size: 24px;
        font-weight: 500;
    }
    .email {
        text-align: center;
        width: 300px;
        height: 30px;
        border: 0px;
        border-radius: 20px;
        font-family: "Alef", sans-serif;
        margin-top:10px;
        margin-bottom:10px;
        font-size: 24px;

    }

    div{
        margin-top: 5px;
        align-items:center;
        padding:1px;
    }
    form{
        margin-top: 5px;
    }
   

     /* Estilo para esconder o checkbox padrão */
     input[type="checkbox"] {
        display: none;
    }

    /* Estilo para o rótulo do checkbox */
    label.checkbox {
        position: relative;
        display: inline-block;
        padding-left: 30px; /* Espaço para o círculo */
        cursor: pointer;
        margin-right: 10px; /* Espaço entre os checkboxes */
    }

    /* Estilo para o círculo */
    label.checkbox::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 10px;
        height: 10px;
        border: 2px solid #635A56; /* Borda do círculo */
        border-radius: 50%; /* Borda arredondada */
    }

    /* Estilo para o círculo quando o checkbox está marcado */
    input[type="checkbox"]:checked + label.checkbox::before {
        background-color: #635A56; /* Cor de fundo do círculo */
    }

    /* Estilo para o texto do rótulo */
    label.checkbox::after {
        content: attr(data-label);
        font-size: 24px;
        font-weight: 500;
        display: block;
        margin-left: 25px; /* Espaço após o círculo */
        color: #635A56; /* Cor do texto */
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