import React from "react";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

const CalMonth = () => {
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
  return (
    <div className="CalMonth">
      <button>
        <NavigateBeforeIcon />
      </button>
      {monthObj[2]}
      <button>
        <NavigateNextIcon />
      </button>
    </div>
  );
};

export default CalMonth;
