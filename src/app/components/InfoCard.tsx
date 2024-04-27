import React from "react";
import styled from "styled-components";
import Techillustration from "../../../public/Techillustration.png";

export default function InfoCard() {
  return (
    <InfoContainer>
      <ImageContainer>
        <Image src={Techillustration.src} alt="Logo Polen" />
      </ImageContainer>
      <TextContainer>
        <Title>Nós somos o Pólen de Inovação!</Title>
        <Text>
          Aqui você encontra “O” local perfeito para transformar seus projetos.
          Com a ajuda do nosso time, empreender fica mais simples e fácil. Você
          pode chegar no Pólen com uma ideia, e nós vamos te ajudar a sair com
          um negócio real, rentável e escalável.
        </Text>
      </TextContainer>
    </InfoContainer>
  );
}

const InfoContainer = styled.div`
  width: 40%;
  height: 220px;
  padding: 30px 30px 30px 20px;
  margin: 0px 30px;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.3);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  @media (max-width: 950px) {
    width: 60%;
    flex-direction: column;
    height: auto;
  }

  @media (max-width: 630px) {
    width: 80%;
  }
`;

const ImageContainer = styled.div`
  margin-right: 10px;
`;

const Image = styled.img`
  width: 200px;
`;

const TextContainer = styled.div`
  width: 60%;
  height: 150px;
  text-align: left;
  overflow: scroll;

  @media (max-width: 950px) {
    width: 90%;
  }
`;

const Title = styled.h1`
  font-size: 21px;
  font-weight: 700;
  margin-bottom: 22px;
  color: #EA5E53;
`;

const Text = styled.p`
  color: white;
  font-size: 14px;
  line-height: 1.2;
  letter-spacing: 0.8px;
`;
