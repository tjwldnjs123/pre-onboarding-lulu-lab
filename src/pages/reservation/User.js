import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const User = () => {
  const [name, setName] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
      padding: 8%;
      text-align: center;
      font-size: 30px;

      @media (min-width: 900px) {
        margin-top: 40%;
      }
    }

    .user-input {
      width: 50%;
      font-size: 19px;
      margin-bottom: 10%;

      label {
        text-align: center;
        margin-bottom: 5%;
      }

      input {
        height: 30px;
        padding-left: 5%;
        border: none;
        border-bottom: 1px solid #000;
        font-size: 18px;

        &:focus {
          outline: none;
        }
      }

      .user-name {
        display: flex;
        flex-direction: column;
        margin-bottom: 10%;
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
  }
`;

export default User;
