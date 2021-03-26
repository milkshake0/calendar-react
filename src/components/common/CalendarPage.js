import React, { useState } from "react";
import CalYear from "../CalYear";
import CalMonth from "../CalMonth";
import CalDay from "../CalDay";
import CalDate from "../CalDate";

const CalendarPage = () => {
  const date = new Date();
  const [year, setYear] = useState(date.getFullYear());
  const [month, setMonth] = useState(date.getMonth());
  const [day, setDay] = useState(date.getDay());
  const [date2, setDate2] = useState(date.getDate());

  const onSetYear = (year) => {
    setYear(year);
  };

  const onSetMonth = (month) => {
    setMonth(month);
  };

  const onSetDay = (day) => {
    setDay(day);
  };

  const onSetDate2 = (date2) => {
    setDate2(date2);
  };
  return (
    <div className="CalendarPage">
      <CalYear year={year} />
      <CalMonth
        date={date}
        month={month}
        onSetYear={onSetYear}
        year={year}
        onSetMonth={onSetMonth}
      />
      <CalDay />
      <CalDate date2={date2} onSetDate2={onSetDate2} />
    </div>
  );
};

export default CalendarPage;
