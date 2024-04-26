"use client"
import react from 'react'
import BackgroundForms from '../components/BackgroundForms'
import BackgroundHeader from '../cadastro/components/BackgroundHeader'
import styled from "styled-components"

export default function PaymentPage() {
    return (
      <>
      <BackgroundHeader> 
        <h1> Início </h1>
      </BackgroundHeader>

      <BackgroundForms>
          
          <h1>Cadastre-se</h1>

          <Form>
            <h2> Email </h2>
            <Input type="text" placeholder="Email@gmail.com" />

            <h2> Nome </h2>
            <Input type="text" placeholder="Name" />

            <h2> Senha </h2> 
            <Input type="password" placeholder="Password" /> 

            <h2> Foto de Perfil </h2>
            <Button1> Fazer Upload </Button1>

            <Button2> Sign up </Button2> 
            
            <div>
            <h4> Ja possui uma conta? </h4>
            <Button3> Faça Login </Button3>
            </div>
          </Form>

      </BackgroundForms>
      
      </>

    );
  }

const Form = styled.form`
  width: 60%;
  padding: 1rem 1.2rem;
  border-radius: 2px;
  font-size: 1rem;
  outline-color: transparent;
  display: center;
  
  h2 {
    font-weight: 10;
    font-size: 17px;
    color: #000000;
    margin: 1px 250px;
    
  }
  
  h3 {
  width: 200px;
  display: flex;
  flex-wrap: wrap;
  height: 1em;
  border: 1px solid rgb(111,41,97);
  border-radius: .5em;
  padding: 10px;
  align-items: center;
  margin: 1px 250px;
  }

  h4 {
    font-weight: 10;
    font-size: 17px;
    color: #000000;
    margin: 1px 250px;
    text-align: left;
  }
`;  

const Input = styled.input`
  text-align: center;
  width: 500px;
  border-radius: 20px;
  font-size: 1rem;
  border: 1px solid #465f5fc3;
  outline-color: #c0431dc3;
  display: center;
  padding: 12px 0px;
  margin: 10px 250px;
`;

const Button1 = styled.button`
  width: 500px;
  display: center;
  flex-wrap: wrap;
  height: 3em;
  background-color: rgba(253, 2, 2, 0);
  border-radius: 5em;
  padding: 10px;
  align-items: center;
  margin: 1px 250px;
  border-width: 2px;
  border-style: dashed;
  border-color: #ffffff47;
`;

const Button2 = styled.button`
  width: 500px;
  display: center;
  flex-wrap: wrap;
  height: 3em;
  background-color: rgb(240, 46, 12);
  border-radius: 5em;
  align-items: center;
  margin: 1px 250px;
`;

const Button3 = styled.button`
  width: 75%;
  height: 3em;
  background-color: rgba(240, 46, 12, 0);
  border-style: dashed;
  border-color: transparent;
  margin: 5px 50px;
  text-align: right;
`;