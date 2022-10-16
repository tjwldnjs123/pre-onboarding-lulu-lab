import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const Hospital = () => {
  const params = useParams().id;

  const [hospital, setHospital] = useState([]);

  useEffect(() => {
    fetch("/data/subject.json")
      .then((res) => res.json())
      .then((data) => setHospital(data.medicalCategory));
  }, []);

  return (
    <HospitalContainer>
      <div className="hospital-box">
        {hospital.map(
          (data) =>
            Number(params) === data.id && (
              <div className="hospital-name" key={data.id}>
                {" "}
                {data.detailParts}
              </div>
            )
        )}
      </div>
    </HospitalContainer>
  );
};

const HospitalContainer = styled.div`
  max-width: ${({ theme }) => theme.tablet};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  .hospital-box {
    width: 80%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;

    .hospital-name {
      font-size: 20px;
    }
  }
`;

export default Hospital;
