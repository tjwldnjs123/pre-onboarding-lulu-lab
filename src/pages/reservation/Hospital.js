import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import Container from "../../components/Container";
import Calendar from "./Calendar";

const Hospital = () => {
  const [hospital, setHospital] = useState([]);
  const [modal, setModal] = useState(false);
  const [hospitalName, setHospitalName] = useState("");

  const params = useParams().id;

  useEffect(() => {
    fetch("/pre-onboarding-lulu-lab/data/subject.json")
      .then((res) => res.json())
      .then((data) => setHospital(data.medicalCategory));
  }, []);

  return (
    <Container>
      <HospitalContainer>
        <p>해당 병원</p>
        <ul className="hospital-name">
          {hospital.map(
            (data) =>
              Number(params) === data.id &&
              data.detailParts.map((list) => (
                <li
                  onClick={(e) => {
                    if (e.target.textContent === list.hospital) {
                      setModal(true);
                      setHospitalName(list.hospital);
                    }
                  }}
                  key={list.address}
                >
                  {list.hospital}
                </li>
              ))
          )}
        </ul>
        {modal && (
          <Calendar
            hospital={hospital}
            setModal={setModal}
            hospitalName={hospitalName}
          />
        )}
      </HospitalContainer>
    </Container>
  );
};

const HospitalContainer = styled.div`
  p {
    height: 50px;
    font-size: 22px;
    text-align: center;

    @media (min-width: 900px) {
      margin-top: 3%;
    }
  }
  .hospital-name {
    width: 350px;
    height: 220px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10%;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
      rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;

    @media (max-width: ${({ theme }) => theme.iPhone}) {
      box-shadow: none;
    }

    li {
      font-size: 18px;
      line-height: 2rem;
      cursor: pointer;

      @media (max-width: ${({ theme }) => theme.iPhone}) {
        font-size: 12px;
      }

      &:hover {
        width: 100%;
        text-align: center;
        background-color: rgb(246, 178, 202);
        border: none;
        color: #fff;
      }
    }
  }
`;

export default Hospital;
