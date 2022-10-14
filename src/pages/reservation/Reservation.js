import React from "react";
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
  border: 1px solid red;

  .reservation-container {
    width: 70%;
    height: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid black;
  }
`;

export default Reservation;
