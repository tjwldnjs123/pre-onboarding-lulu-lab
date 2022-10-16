import React, { useState } from "react";
import styled from "styled-components";
import User from "./User";

const Reservation = () => {
  return (
    <ReservationContainer>
      <div className="reservation-container">
        <User />
      </div>
    </ReservationContainer>
  );
};

const ReservationContainer = styled.div`
  max-width: ${({ theme }) => theme.tablet};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;

  .reservation-container {
    width: 70%;
    height: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export default Reservation;
