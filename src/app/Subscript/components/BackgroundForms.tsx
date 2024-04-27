"use client"
import React, { ReactNode } from 'react';
import styled from 'styled-components';
import LogoPolen from '../../../../public/LogoPolen.png';

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
  margin: 100px auto;
  border-radius: 20px;
  padding: 100px;
`;

const ImageContainer = styled.div`
  max-width: 100%;
  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 20px;
`;