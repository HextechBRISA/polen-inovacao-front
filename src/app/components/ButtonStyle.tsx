import React from "react";
import styled from "styled-components";

export default function ButtonStyle({ children }) {
  return (
    <ButtonStyleDiv>
      {children}
    </ButtonStyleDiv>
  );
}

const ButtonStyleDiv = styled.button`
    width: 200px;
    height: 30px;
    background-color: #EA5E53;
    color: white;
    font-size: 14px;
    font-weight: 700;
    border-radius: 20px;
    margin: 10px 0px;
`;