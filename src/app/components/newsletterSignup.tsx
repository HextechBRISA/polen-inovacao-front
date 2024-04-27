"use client"
import React from 'react';
import styled from 'styled-components';
import Envelope from '../../../public/envelope.png';
import Seta from '../../../public/seta.png';


export default function Newsletter() {
    return(
        <ContainerDoNewsletterContainer>
        <NewsLetterContainer>
          <div className='left '>
            <h1>Inscreva-se em nossa NewsLetter!</h1>
            <h2>E receba todas as nossas novidades em primeira mão!</h2>
            <Image className='arrow' src={Seta.src}   alt="seta" />
          </div>
          <div className='right'>
            <Image src={Envelope.src} alt="Envelope" />
          </div>
        </NewsLetterContainer>
        </ContainerDoNewsletterContainer>
    );
}
const ContainerDoNewsletterContainer = styled.div`
  cursor: pointer;
 `;
const NewsLetterContainer = styled.div`
  background-color: #EA5E53;
  width: 350px;
  height: 190px;
  margin: 300px 0px 0px 800px;
  border-radius: 20px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);
  
  h1, h2 {
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
      width: 110px;
    }
  .right {
   width: 150px;
   height: auto;
   align-content:center;
  }
`;
const Image = styled.img`
   width: 150px;
   align-content:center
`;
