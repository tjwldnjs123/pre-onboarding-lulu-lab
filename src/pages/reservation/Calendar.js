import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Calendar({ setTime, hour }) {
  const [startDate, setStartDate] = useState(new Date());

  const calendar = useRef(null);
  return (
    <CalendarContainer
      ref={calendar}
      onClick={(e) => {
        if (calendar.current === e.target) {
          setTime(false);
        }
      }}
    >
      <DatePicker className="calendar-box" selected={startDate} inline />
      <div className="time-box">
        <select name="예약시간">
          {hour?.map((time) => (
            <option key={time.id} value={`${time.hour}:00`}>
              {time.hour}:00
            </option>
          ))}
        </select>
      </div>
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
