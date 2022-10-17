import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Container from "../../components/Container";

const MainSubject = () => {
  const [subject, setSubject] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("/pre-onboarding-lulu-lab/data/subject.json")
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
    font-size: 22px;
  }

  ul {
    width: 80%;
    height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: 1% auto 0 auto;

    li {
      width: 90px;
      height: 60px;
      margin: 2%;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid lightgray;
      border-radius: 10%;
      font-size: 13px;
      text-align: center;
      cursor: pointer;

      @media (max-width: ${({ theme }) => theme.iPhone}) {
        width: 50px;
        height: 50px;
        font-size: 8px;
      }

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
`;

export default MainSubject;
