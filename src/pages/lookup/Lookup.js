import React from "react";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import Container from "../../components/Container";

const Lookup = () => {
  const userInformation = JSON.parse(localStorage.getItem("user"));
  const information = JSON.parse(localStorage.getItem("information"));

  const navigate = useNavigate();

  const handleExit = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("information");
    navigate("/");
  };

  return (
    <Container>
      {userInformation && information ? (
        <UserContainer>
          <div>
            <p className="name">{userInformation[0]}님</p>

            <p>
              예약하신 병원: <span>{information[0]}</span>
            </p>
            <p>예약 날짜: {information[1]}</p>
            <p>예약 시간: {information[2]}</p>
            <div className="btn-container">
              <button
                className="change"
                onClick={() => navigate("/registration")}
              >
                변경
              </button>
              <button onClick={handleExit}>나가기</button>
            </div>
          </div>
        </UserContainer>
      ) : (
        <LinkContainer>
          <div className="alert-page">
            <p>예약 내역이 없습니다.</p>
            <Link to="/reservation">회원정보 입력하러 가기</Link>
          </div>
        </LinkContainer>
      )}
    </Container>
  );
};

const UserContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 350px;
  height: 200px;
  line-height: 1.5rem;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;

  @media (max-width: ${({ theme }) => theme.iPhone}) {
    width: 300px;
    height: 150px;
  }

  p {
    font-size: 18px;
    @media (max-width: ${({ theme }) => theme.iPhone}) {
      font-size: 12px;
    }
  }
  .name {
    margin-bottom: 10px;
    font-size: 25px;

    @media (max-width: ${({ theme }) => theme.iPhone}) {
      font-size: 15px;
      margin-bottom: 5px;
    }
  }

  .btn-container {
    display: flex;
    justify-content: space-around;
    height: 30px;
    margin-top: 20%;

    @media (max-width: ${({ theme }) => theme.iPhone}) {
      margin-top: 3%;
    }

    button {
      background-color: #fff;
      color: #000;
      border: none;
      cursor: pointer;

      &:hover {
        background-color: rgb(246, 178, 202);
        border: none;
        border-radius: 10%;
        color: #fff;
      }
    }
  }
`;

const LinkContainer = styled.div`
  .alert-page {
    margin-top: 10%;
    font-size: 25px;

    p {
      margin-bottom: 10%;
    }

    a {
      text-decoration: none;
      color: rgb(246, 178, 202);
      font-weight: 700;
      cursor: pointer;
    }
  }
`;

export default Lookup;
