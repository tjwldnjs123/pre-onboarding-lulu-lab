import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

function Calendar({ setModal, hospitalName }) {
  const [startDate, setStartDate] = useState(new Date());
  const [selectHour, setSelectHour] = useState("");
  const [time, setTime] = useState([]);

  const calendar = useRef(null);

  useEffect(() => {
    fetch("/pre-onboarding-lulu-lab/data/time.json")
      .then((res) => res.json())
      .then((data) => setTime(data.time));
  }, []);

  const navigate = useNavigate();

  const pickDay = moment(startDate).format("YYYY-MM-DD");

  const information = [hospitalName, pickDay, selectHour];

  const handleSuccess = () => {
    if (startDate && selectHour) {
      alert("예약이 완료 되었습니다.");
      localStorage.setItem("information", JSON.stringify(information));
      navigate("/");
    } else {
      alert("다시 확인해 주십시오.");
    }
  };

  return (
    <CalendarContainer
      ref={calendar}
      onClick={(e) => {
        if (calendar.current === e.target) {
          setModal(false);
        }
      }}
    >
      <div className="calendar-container">
        <DatePicker
          className="calendar-box"
          selected={startDate}
          onChange={(e) => setStartDate(e)}
          shouldCloseOnSelect={false}
          minDate={new Date()}
          inline
        />
        <div className="time-container">
          <select
            className="time-box"
            onChange={(e) => setSelectHour(e.target.value)}
          >
            <option>시간을 선택해 주세요:)</option>
            {time.map((hour, idx) => (
              <option key={idx}>{hour}</option>
            ))}
          </select>
          <button onClick={handleSuccess}>예약 완료</button>
        </div>
      </div>
    </CalendarContainer>
  );
}

const CalendarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #00000099;
  z-index: 1;

  @media (max-width: ${({ theme }) => theme.iPhone}) {
    margin-right: 25px;
  }

  .calendar-container {
    .react-datepicker__month-container {
      width: 300px;
      height: 300px;
    }
    .react-datepicker__day--selected {
      background-color: rgb(246, 178, 202);
      border-radius: 50%;
      font-size: 20px;
    }

    .time-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 8%;

      .time-box {
        width: 200px;
        height: 30px;
        font-size: 15px;
      }
      button {
        width: 100px;
        height: 50px;
        margin-top: 3%;
        border-radius: 10%;

        &:hover {
          background-color: rgb(246, 178, 202);
          border: none;
          color: #fff;
          cursor: pointer;
        }
      }
    }
  }
`;

export default Calendar;
