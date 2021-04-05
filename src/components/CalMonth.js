import React, { useState } from "react";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

const CalMonth = ({ month, onClickNextBtn, onClickPrevBtn, onSetMonth }) => {
  const monthObj = {
    0: "January",
    1: "February",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "August",
    8: "September",
    9: "October",
    10: "November",
    11: "December",
  };
  const [isMonthModal, setIsMonthModal] = useState(false);
  return (
    <div className="CalMonth">
      {isMonthModal ? (
        <ul className="monthList">
          {Object.keys(monthObj).map((v) => (
            <li
              key={v}
              onClick={() => {
                onSetMonth(v);
                setIsMonthModal(false);
              }}
            >
              {monthObj[v]}
            </li>
          ))}
        </ul>
      ) : (
        ""
      )}
      <button onClick={onClickPrevBtn}>
        <NavigateBeforeIcon />
      </button>
      <div
        className="month underline"
        onClick={() => setIsMonthModal(!isMonthModal)}
      >
        {monthObj[month]}
      </div>
      <button onClick={onClickNextBtn}>
        <NavigateNextIcon />
      </button>
    </div>
  );
};

export default CalMonth;
