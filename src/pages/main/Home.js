import React from "react";
import styled from "styled-components";

function Home() {
  return (
    <HomeContainer>
      <div className="home-container">
        <div className="header">lululab</div>
        <ul>
          <li>진료 예약</li>
          <li>예약 조회</li>
        </ul>
      </div>
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  max-width: ${({ theme }) => theme.tablet};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  border: 1px solid red;

  .home-container {
    width: 70%;
    height: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid black;

    .header {
      padding: 8%;
      font-size: 50px;
    }

    ul {
      width: 100%;
      height: 30%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      margin-top: 30%;
      font-size: 25px;
      text-align: center;

      li {
        padding: 5%;
      }
    }
  }
`;

export default Home;
