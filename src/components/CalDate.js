import React, { useState } from "react";

const CalDate = ({
  date,
  date2,
  year,
  month,
  prevDate,
  currDate,
  nextDate,
  getSelectDate,
  onClickSetIsModal,
  onSetSelectDate,
  calTodos,
}) => {
  const [selectD, setSelectD] = useState("");

  const currDateObj = new Date(year, month, date2);
  const isToday =
    `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}` ===
    `${currDateObj.getFullYear()}-${currDateObj.getMonth()}-${currDateObj.getDate()}`;

  const onClickCurrDate = (d) => {
    const date = new Date(year, month, d);
    getSelectDate(date);
    setSelectD("" + year + month + d);
    if (selectD === "" + year + month + d) {
      onClickSetIsModal(true);
    }
    onSetSelectDate(d);
  };

  //todolist dot
  const dateArr = [];
  calTodos.forEach((todo) => {
    if (todo.month === month) {
      if (!dateArr.includes(todo.date)) {
        dateArr.push(todo.date);
      }
    }
  });
  const createDot = (v) => {
    if (dateArr.includes(v)) {
      return "todo";
    }
    return "";
  };

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
            className={
              createDot(v) +
              " " +
              `currMonth ${isToday && date2 === v ? `today` : ""} ${
                selectD === "" + year + month + v ? "select" : ""
              }`
            }
            key={v}
            onClick={() => onClickCurrDate(v)}
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
