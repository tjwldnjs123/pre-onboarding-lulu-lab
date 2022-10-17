import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Container from "../../components/Container";

const Home = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <BtnBox>
        <li onClick={() => navigate("/reservation")}>진료 예약</li>
        <li onClick={() => navigate("/lookup")}>예약 조회</li>
      </BtnBox>
    </Container>
  );
};

const BtnBox = styled.ul`
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 20%;
  font-size: 25px;
  text-align: center;

  @media (min-width: 900px) {
    margin-top: 10%;
  }
  @media (max-width: ${({ theme }) => theme.iPhone}) {
    flex-direction: column;
  }

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
`;

export default Home;
