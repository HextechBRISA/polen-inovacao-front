import React from "react";
import styled from "styled-components";
import InfoCard from "./InfoCard";
import Newsletter from "./NewsLetterCard";

export default function PublicCards() {
  return (
    <ContainerDoPublicCards>
      <InfoCard />
      <Newsletter />
    </ContainerDoPublicCards>
  );
}

const ContainerDoPublicCards = styled.div`
    width: 100%;
    height: auto;
    margin-top: 70px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 950px) {
      flex-direction: column ;
      margin-top: 40px;
    }
`;