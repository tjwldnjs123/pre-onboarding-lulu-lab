import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import HeaderLogo from "../../assets/lululab.png";
import Container from "../../components/Container";

const MainSubject = () => {
  const [subject, setSubject] = useState([]);

  const navigate = useNavigate();

  // useEffect(() => {
  //   fetch("/data/time.json")
  //     .then((res) => res.json())
  //     .then((time) => setHour(time.time));
  // }, []);

  useEffect(() => {
    fetch("/data/subject.json")
      .then((res) => res.json())
      .then((medical) => setSubject(medical.medicalCategory));
  }, []);

  return (
    <Container>
      <MainSubjectContainer>
        <p>진료 과목</p>
        <ul>
          {subject.map((subjectEl) => (
            <li
              key={subjectEl.id}
              onClick={() => navigate(`/registration${subjectEl.id}`)}
            >
              {subjectEl.parts}
            </li>
          ))}
        </ul>
      </MainSubjectContainer>
    </Container>
  );
};

const MainSubjectContainer = styled.div`
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
`;

export default MainSubject;
