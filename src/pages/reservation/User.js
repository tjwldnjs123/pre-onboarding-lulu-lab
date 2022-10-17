import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const User = () => {
  const [name, setName] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [submitMsg, setSubmitMsg] = useState("");

  const navigate = useNavigate();

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handlePhoneNum = (e) => {
    setPhoneNum(e.target.value);
    phoneNum.length < 10
      ? setErrorMsg("휴대폰 번호를 다시 확인해주세요.")
      : setErrorMsg("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    name.length === 0 && phoneNum.length < 10
      ? setSubmitMsg("양식에 맞게 채워주세요.")
      : setSubmitMsg("");

    if (name && phoneNum.length > 10) {
      navigate("/registration");
      localStorage.setItem("user", JSON.stringify([name, phoneNum]));
    }
  };
  return (
    <UserContainer>
      <div className="user-container">
        <p>회원 정보</p>
        <div className="user-input">
          <div className="user-name">
            <label htmlFor="userName">이름</label>
            <input type="text" id="userName" onChange={handleName} />
          </div>
          <div className="user-phone">
            <label htmlFor="phoneNum">휴대폰 번호</label>
            <input type="number" id="phoneNum" onChange={handlePhoneNum} />
            <p>{errorMsg}</p>
          </div>
        </div>
        <div className="btn">
          <button onClick={handleSubmit}>확인</button>
          <button onClick={() => navigate("/")}>취소</button>
        </div>
        <p className="message">{submitMsg}</p>
      </div>
    </UserContainer>
  );
};

const UserContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .user-container {
    width: 80%;
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
      padding: 8%;
      text-align: center;
      font-size: 30px;
    }

    .user-input {
      width: 50%;
      margin-bottom: 5%;
      font-size: 19px;

      label {
        margin-bottom: 2%;
        text-align: center;
      }

      input {
        height: 30px;
        padding-left: 5%;
        border: none;
        border-bottom: 1px solid #000;
        font-size: 18px;

        @media (min-width: ${({ theme }) => theme.iPhone}) {
          font-size: 12px;
        }

        &:focus {
          outline: none;
        }
      }

      .user-name {
        display: flex;
        flex-direction: column;
        margin-bottom: 8%;
      }
      .user-phone {
        display: flex;
        flex-direction: column;

        p {
          font-size: 11px;
          color: red;
        }
      }
    }

    .btn {
      width: 70%;
      padding: 2%;
      margin: auto;
      text-align: center;

      button {
        padding: 10px 20px;
        margin: 3%;
        background-color: #fff;
        border: 1px solid #000;
        border-radius: 10%;

        &:hover {
          background-color: rgb(246, 178, 202);
          color: #fff;
          border: none;
        }
      }
    }

    .message {
      font-size: 20px;
      color: gray;
    }
  }
`;

export default User;
