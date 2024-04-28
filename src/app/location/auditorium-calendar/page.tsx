"use client"
import React from "react";
import styled from "styled-components";

export default function AuditoriumCalendarPage() {
  return (
    <ContainerCalendar>
        <h1>Calendário do Auditório:</h1>
    </ContainerCalendar>
  );
}

const ContainerCalendar = styled.div`
  background-color: rgba(255, 255, 255, 0.3);
  width: 60%;
  margin: 130px auto;
  border-radius: 20px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);  
`;