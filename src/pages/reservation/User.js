import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const User = () => {
  const [name, setName] = useState("");
  const [phoneNum, setPhoneNum] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && phoneNum.length > 10) {
      navigate("/registration");
    }
  };
  return (
    <UserContainer>
      <p>회원 정보</p>
      <div className="user-input">
        <div className="user-name">
          <label htmlFor="userName">환자 이름 </label>
          <input
            type="text"
            id="userName"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="user-phone">
          <label htmlFor="phoneNum">핸드폰 번호 </label>
          <input
            type="number"
            id="phoneNum"
            onChange={(e) => {
              setPhoneNum(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="btn">
        <button onClick={handleSubmit}>확인</button>
        <button>취소</button>
      </div>
    </UserContainer>
  );
};

const UserContainer = styled.div`
  width: 100%;
  margin: auto;

  p {
    padding: 8%;
    text-align: center;
    font-size: 25px;
  }

  .user-input {
    width: 70%;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    margin: auto;
    font-size: 19px;

    input {
      width: 70%;
      height: 30px;
    }

    .user-name {
      padding: 10%;

      label {
        margin-right: 17px;
      }
    }
    .user-phone {
      padding: 10%;
    }
  }

  .btn {
    width: 70%;
    border: 1px solid red;
    padding: 2%;
    margin: auto;
    text-align: center;

    button {
      padding: 10px 20px;
      margin: 3%;
    }
  }
`;

export default User;
