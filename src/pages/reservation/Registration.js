import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Calendar from "./Calendar";
import { useRecoilState } from "recoil";
import { subjectState, hourState } from "../../atom";

const Registration = () => {
  const [subject, setSubject] = useRecoilState(subjectState);
  const [time, setTime] = useState(false);
  const [hour, setHour] = useState(hourState);

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
  };

  return (
    <RegistrationContainer>
      <div className="registration-list">
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
            {time ? (
              <Calendar setTime={setTime} hour={hour} />
            ) : (
              <p>진료과목을 선택해주세요</p>
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

  .registration-list {
    width: 90%;
    height: 100%;
    border: 1px solid red;

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
      border: 1px solid red;
      display: flex;
      width: 100%;
      height: 70%;

      .treatment-subject {
        border: 1px solid gray;
        width: 50%;
        height: 100%;

        p {
          padding: 3%;
          font-size: 25px;
        }
        ul {
          li {
            padding: 2%;
            font-size: 20px;
          }
        }
      }

      .calendar-box {
        width: 50%;

        p {
          margin-top: 80%;
          text-align: center;
          font-size: 20px;
        }
      }
    }
  }
`;

export default Registration;
