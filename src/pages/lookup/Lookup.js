import React from "react";
import { useRecoilValue } from "recoil";
import {
  nameState,
  phoneNumState,
  selectHourState,
  selectSubjectState,
} from "../../atom";

const Lookup = () => {
  const name = useRecoilValue(nameState);
  const phoneNum = useRecoilValue(phoneNumState);
  const selectSubject = useRecoilValue(selectSubjectState);
  const selectHour = useRecoilValue(selectHourState);

  return (
    <div>
      <p>{name}</p>
      <p>{phoneNum}</p>
      <p>{selectSubject}</p>
      <p>{selectHour}</p>
    </div>
  );
};

export default Lookup;
