import React, { useState, useEffect } from "react";
import styled from "styled-components";
import User from "./User";
import HeaderLogo from "../../assets/lululab.png";

const Reservation = () => {
  return (
    <ReservationContainer>
      <div className="reservation-container">
        <div className="header">
          <img src={HeaderLogo} alt="lululab-logo" />
        </div>
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

  .reservation-container {
    width: 80%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;

    .header {
      padding: 10%;

      margin-bottom: 25%;

      @media (min-width: 900px) {
        margin-bottom: 77%;
      }

      img {
        width: 330px;
        height: 70px;
      }
    }
  }
`;

export default Reservation;
