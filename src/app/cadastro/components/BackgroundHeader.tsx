"use client"
import React, { ReactNode } from 'react';
import styled from 'styled-components';
import LogoHeader from '../../../../public/LogoHeader.png';

interface BackgroundHeaderProps {
    children?: ReactNode;
}

export default function BackgroundHeader({ children }: BackgroundHeaderProps) {
    return (
    <BackgroundHeaderContainer>
        <ImageContainer>
         <Image src={LogoHeader.src} alt="Logo Header" />
        </ImageContainer>
        { children }
    </BackgroundHeaderContainer>
 );
}

  const BackgroundHeaderContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.3);
  width: 100%;
  margin: 0px auto;
  border-radius: 0px;
  padding: 0px;

  h1 {
    font-weight: 700;
    font-size: 20px;
    color: #635A56;
    text-align: right;
  }
`;


const ImageContainer = styled.div`
  max-width: 150px;
  display: flex;
  justify-content: center;
  
`;

const Image = styled.img`
  max-width: 100%;
  height: 50%;
  margin-bottom: -10px;
  margin-top: 10px;
`;
