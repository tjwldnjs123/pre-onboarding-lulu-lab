import React from "react";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import HeaderLogo from "../../assets/lululab.png";

const Lookup = () => {
  const userInformation = JSON.parse(localStorage.getItem("user"));
  const information = JSON.parse(localStorage.getItem("reservation"));

  const navigate = useNavigate();

  const handleExit = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("reservation");
    navigate("/");
  };

  return (
    <>
      <div className="header">
        <img src={HeaderLogo} alt="lululab-logo" />
      </div>
      {userInformation && information ? (
        <LokkupContainer>
          <div>
            <p>이름: {userInformation[0]}</p>
            <p>전화번호: {userInformation[1]}</p>
            <p>
              예약한 날짜: <span>{information[0]}</span>
            </p>
            <p>예약한 시간: {information[1]}</p>
            <p>진료 과목: {information[2]}</p>
            <button onClick={() => navigate("/registration")}>수정</button>
            <button onClick={handleExit}>나가기</button>
          </div>
        </LokkupContainer>
      ) : (
        <AlertContainer>
          <div className="alert-page">
            <p>회원정보를 입력해 주세요.</p>
            <Link to="/reservation">회원정보 입력하러 가기</Link>
          </div>
        </AlertContainer>
      )}
    </>
  );
};

const LokkupContainer = styled.div`
  max-width: ${({ theme }) => theme.tablet};
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;

  .header {
    padding: 25% 8% 8% 8%;
    font-size: 50px;
  }
`;

const AlertContainer = styled.div`
  max-width: ${({ theme }) => theme.tablet};
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  font-size: 25px;

  .alert-page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 30%;

    p {
      padding-bottom: 10%;
    }

    a {
      color: #000;
      font-size: 18px;
    }
  }
`;

export default Lookup;
