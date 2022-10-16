import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const DetailSubject = () => {
  const params = useParams().id;

  const [hospital, setHospital] = useState([]);

  useEffect(() => {
    fetch("/data/subject.json")
      .then((res) => res.json())
      .then((data) => setHospital(data.medicalCategory));
  }, []);

  return (
    <div>
      {hospital?.map((data) =>
        Number(params) === data.id ? <div> {data.detailParts}</div> : ""
      )}
    </div>
  );
};

export default DetailSubject;
