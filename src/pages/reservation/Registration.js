import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Calendar from "./Calendar";

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

  const handleChoice = (e) => {
    setTime((prev) => !prev);

    setSelectSubject(e.target.textContent);
  };

  return (
    <RegistrationContainer>
      <div className="registration-list">
        <p className="header">lululab</p>
        <div className="step">
          <p>step 1</p>
          <p>step 2</p>
        </div>

        <div className="registration">
          <div className="treatment-subject">
            <p>진료 분야</p>
            <ul>
              {subject?.map((list) => (
                <li key={list.id} onClick={handleChoice}>
                  {list.parts}
                </li>
              ))}
            </ul>
          </div>
          <div className="calendar-box">
            <p>예약시간</p>
            {time ? (
              <Calendar
                selectSubject={selectSubject}
                setTime={setTime}
                hour={hour}
              />
            ) : (
              <p className="content">진료과목을 선택해주세요</p>
            )}
          </div>
        </div>
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
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;

  .registration-list {
    width: 90%;
    height: 100%;

    .header {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 10%;
      margin-top: 5%;
      font-size: 50px;
    }

    .step {
      width: 100%;
      display: flex;
      height: 40px;
      margin-top: 20%;
      font-size: 25px;
      p {
        width: 50%;
        border: 1px solid lightgray;
        margin: auto;
        padding: 1%;
        text-align: center;
      }
    }

    .registration {
      display: flex;
      width: 100%;
      height: 70%;

      .treatment-subject {
        border: 1px solid lightgray;
        border-top: none;
        width: 50%;
        height: 90%;
        p {
          padding: 5%;
          font-size: 25px;
          text-align: center;
        }
        ul {
          li {
            padding: 2%;
            font-size: 20px;
            text-align: center;
          }
        }
      }

      .calendar-box {
        width: 50%;
        height: 90%;
        border: 1px solid lightgray;

        p {
          text-align: center;
          font-size: 25px;
          margin-top: 5%;
        }

        .content {
          margin-top: 30%;
          font-size: 18px;
        }
      }
    }
  }
`;

export default Registration;
