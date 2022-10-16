import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import moment from "moment";

function Calendar({ setTime, hour, selectSubject }) {
  const [startDate, setStartDate] = useState(new Date());
  const [selectHour, setSelectHour] = useState("");

  const navigate = useNavigate();

  const calendar = useRef(null);

  const handleReservationHour = (e) => {
    setSelectHour(e.target.value);
  };

  const handleSuccess = () => {
    if (startDate && selectHour) {
      alert("예약이 완료 되었습니다.");
      const reservation = [startDate, selectHour, selectSubject];
      localStorage.setItem("reservation", JSON.stringify(reservation));

      navigate("/");
    } else {
      alert("다시 확인해 주십시오.");
    }
  };

  return (
    <CalendarContainer
      ref={calendar}
      onClick={(e) => {
        calendar.current === e.target && setTime(false);
      }}
    >
      <DatePicker
        className="calendar-box"
        selected={startDate}
        onChange={(e) => setStartDate(e)}
        shouldCloseOnSelect={false}
        minDate={new Date()}
        inline
      />
      <div className="time-box">
        <select name="예약시간" onChange={handleReservationHour}>
          <option>시간을 선택해 주세요</option>
          {hour?.map((time) => (
            <option key={time.id} value={`${time.hour}:00`}>
              {time.hour}:00
            </option>
          ))}
        </select>
      </div>
      <button onClick={handleSuccess}>예약 완료</button>
    </CalendarContainer>
  );
}

const CalendarContainer = styled.div`
  position: fixed;
  border: 1px solid blue;
  height: 100vh;
  background-color: #00000099;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;

  .calendar-box {
    z-index: 10;

    border: 1px solid red;
    .react-datepicker__month-container {
      width: 400px;
      height: 500px;
    }
  }

  .time-box {
    select {
      width: 100px;
    }
  }
`;

export default Calendar;
