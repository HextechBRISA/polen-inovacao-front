"use client"
import React, { ReactNode } from 'react';
import styled from 'styled-components';
import LogoPolen from '../../../public/LogoPolen.png';
import Link from 'next/link';

interface BackgroundFormsProps {
  children?: ReactNode;
}

export default function BackgroundForms({ children }: BackgroundFormsProps) {
  return (
    <BackgroundFormsContainer>
        <ImageContainer>
          <Image src={LogoPolen.src} alt="Logo Polen" />
        </ImageContainer>
        { children }
    </BackgroundFormsContainer>
  );
}

const BackgroundFormsContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.3);
  width: 50%;
  margin: 130px auto;
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-weight: 700;
    font-size: 26px;
    color: #635A56;
    text-align: left;
  }

  @media (max-width: 850px) {
    width: 80%;
    padding: 20px;
  }
`;

const ImageContainer = styled.div`
  max-width: 100%;
  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 05px;
`;