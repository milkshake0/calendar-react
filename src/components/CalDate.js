import React, { useState } from "react";

const CalDate = ({
  date,
  date2,
  year,
  month,
  prevDate,
  currDate,
  nextDate,
}) => {
  const currDateObj = new Date(year, month, date2);
  const isToday =
    `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}` ===
    `${currDateObj.getFullYear()}-${currDateObj.getMonth()}-${currDateObj.getDate()}`;

  return (
    <div className="CalDate">
      <ul>
        {prevDate.map((v) => (
          <li className="prevMonth" key={v}>
            <span>{v}</span>
          </li>
        ))}
        {currDate.map((v) => (
          <li
            className={`currMonth ${isToday && date2 === v ? `today` : ""}`}
            key={v}
          >
            <span>{v}</span>
          </li>
        ))}
        {nextDate.map((v) => (
          <li className="nextMonth" key={v}>
            <span>{v}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

CalDate.defaultProps = {
  prevDate: [],
  currDate: [],
  nextDate: [],
};
export default CalDate;
