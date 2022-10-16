import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Calendar from "./Calendar";
import HeaderLogo from "../../assets/lululab.png";

const Registration = () => {
  const [subject, setSubject] = useState([]);
  const [time, setTime] = useState(false);
  const [hour, setHour] = useState([]);
  const [selectSubject, setSelectSubject] = useState("");

  useEffect(() => {
    fetch("/data/time.json")
      .then((res) => res.json())
      .then((time) => setHour(time.time));
  }, []);

  useEffect(() => {
    fetch("/data/subject.json")
      .then((res) => res.json())
      .then((medical) => setSubject(medical.medicalCategory));
  }, []);

  console.log(subject);

  return (
    <RegistrationContainer>
      <div className="registration-list">
        <div className="header">
          <img src={HeaderLogo} alt="lululab-logo" />
        </div>
        <p>진료 과목</p>
        <ul>
          {subject?.map((subjectEl) => (
            <li key={subjectEl.id}>{subjectEl.parts}</li>
          ))}
        </ul>
      </div>
    </RegistrationContainer>
  );
};

const RegistrationContainer = styled.div`
  max-width: ${({ theme }) => theme.tablet};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  .registration-list {
    width: 90%;
    height: 80%;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;

    .header {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 10%;
      margin-top: 3%;
      padding: 20%;

      img {
        width: 330px;
        height: 70px;
      }
    }

    p {
      height: 50px;
      text-align: center;
      font-size: 25px;

      @media (min-width: 900px) {
        margin-top: 20%;
      }
    }

    ul {
      width: 80%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      height: 35%;
      margin: 5% auto 0 auto;

      li {
        border: 1px solid lightgray;
        width: 150px;
        height: 100px;
        margin: 2%;
        border-radius: 10%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        cursor: pointer;

        &:hover {
          position: relative;
          top: -15px;
          background-color: rgb(246, 178, 202);
          border: none;
          color: #fff;
          transition: 0.5s;
        }
      }
    }
  }
`;

export default Registration;
