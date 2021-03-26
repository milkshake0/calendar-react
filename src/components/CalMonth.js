import React, { useState } from "react";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

const CalMonth = ({ month, year, onSetYear, onSetMonth }) => {
  const monthObj = {
    0: "JANUARY",
    1: "FEBRUARY",
    2: "MARCH",
    3: "APRIL",
    4: "MAY",
    5: "JUNE",
    6: "JULY",
    7: "AUGUST",
    8: "SEPTEMBER",
    9: "OCTOBER",
    10: "NOVEMBER",
    11: "DECEMBER",
  };
  const onClickNextBtn = () => {
    let monthNum = (month % 12) + 1;
    if (monthNum === 12) {
      monthNum = 0;
      onSetYear(year + 1);
    }
    onSetMonth(monthNum);
  };
  const onClickPrevBtn = () => {
    let monthNum = (month - 1 + 12) % 12;
    if (monthNum === 0) {
      onSetYear(year - 1);
    }
    onSetMonth(monthNum);
  };
  return (
    <div className="CalMonth">
      <button onClick={onClickPrevBtn}>
        <NavigateBeforeIcon />
      </button>
      {monthObj[month]}
      <button onClick={onClickNextBtn}>
        <NavigateNextIcon />
      </button>
    </div>
  );
};

export default CalMonth;
