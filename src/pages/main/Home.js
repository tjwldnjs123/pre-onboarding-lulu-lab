import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Home() {
  const navigate = useNavigate();
  return (
    <HomeContainer>
      <div className="home-container">
        <div className="header">lululab</div>
        <ul>
          <li onClick={() => navigate("/reservation")}>진료 예약</li>
          <li onClick={() => navigate("/lookup")}>예약 조회</li>
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
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;

  .home-container {
    width: 70%;
    height: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .header {
      padding: 8%;
      font-size: 50px;
    }

    ul {
      width: 100%;
      height: 30%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin-top: 50%;
      font-size: 25px;
      text-align: center;

      li {
        padding: 5%;
        box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
          rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
          rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
        cursor: pointer;

        &:hover {
          background-color: rgb(246, 178, 202);
          color: #fff;
        }
      }
    }
  }
`;

export default Home;
