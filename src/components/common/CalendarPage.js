import React from "react";
import CalYear from "../CalYear";
import CalMonth from "../CalMonth";
import CalDay from "../CalDay";
import CalDate from "../CalDate";

const CalendarPage = () => {
  const date = new Date();
  console.log(date);
  return (
    <div className="CalendarPage">
      <CalYear />
      <CalMonth />
      <CalDay />
      <CalDate />
    </div>
  );
};

export default CalendarPage;
