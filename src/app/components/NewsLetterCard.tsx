"use client";
import React from "react";
import styled from "styled-components";
import Envelope from "../../../public/envelope.png";
import Seta from "../../../public/seta.png";
import Link from "next/link";

export default function Newsletter() {
  return (
      <NewsLetterContainer>
        <div className="left ">
          <h1>Inscreva-se em nossa NewsLetter!</h1>
          <h2>E receba todas as nossas novidades em primeira mão!</h2>
          <Link href={"/newsletter"}>
            <Image className="arrow" src={Seta.src} alt="seta" />
          </Link>
        </div>
        <div className="right">
          <Image src={Envelope.src} alt="Envelope" />
        </div>
      </NewsLetterContainer>
  );
}

const NewsLetterContainer = styled.div`
  background-color: #ea5e53;
  width: 350px;
  height: 220px;
  border-radius: 20px;
  padding: 20px;
  margin: 0px 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
  cursor: pointer;

  @media (max-width: 950px) {
    width: 60%;
    margin: 30px 0px;
  }

  @media (max-width: 630px) {
    width: 80%;
  }

  h1,
  h2 {
    font-weight: 700;
    font-size: 16px;
    color: white;
    text-align: left;
    margin-bottom: 10px;
  }

  h2 {
    font-weight: 400;
  }

  .left {
    width: 170px;
    margin-right: 5px;
  }
  
  .arrow {
    margin-top: 5px;
    width: 100px;
  }

  .right {
    width: 150px;
    height: auto;
    align-content: center;
  }
`;

const Image = styled.img`
  width: 150px;
  align-content: center;
`;
