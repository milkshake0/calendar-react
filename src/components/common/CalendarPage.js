import React, { useCallback, useEffect, useState } from "react";
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

  const [prevDate, setPrevDate] = useState([]);
  const [currDate, setCurrDate] = useState([]);
  const [nextDate, setNextDate] = useState([]);

  const onSetYear = useCallback((year) => {
    setYear(year);
  });

  const onSetMonth = useCallback((month) => {
    setMonth(month);
  });

  //   const onSetDay = (day) => {
  //     setDay(day);
  //   };

  //   const onSetDate2 = (date2) => {
  //     setDate2(date2);
  //   };

  useEffect(() => {
    setPrevDateOfMonth(year, month);
    setCurrDateOfMonth(year, month);
    setNextDateOfMonth(year, month);
  }, [year, month]);

  const setPrevDateOfMonth = (year, month) => {
    const firstDate = new Date(year, month, 1);
    const firstDay = firstDate.getDay();
    let prevArr = [];
    if (firstDay !== 0) {
      for (let i = 0; i < firstDay; i++) {
        prevArr.unshift(new Date(year, month, -i).getDate());
      }
    }
    setPrevDate(prevArr);
  };

  const setCurrDateOfMonth = (year, month) => {
    const lastDate = new Date(year, month + 1, 0).getDate();
    let currArr = [];
    for (let i = 0; i < lastDate; i++) {
      currArr[i] = i + 1;
    }
    setCurrDate(currArr);
    return currArr;
  };

  const setNextDateOfMonth = (year, month) => {
    const lastDay = new Date(year, month + 1, 0).getDay();
    const num = 6 - lastDay;
    let nextArr = [];
    for (let i = 0; i < num; i++) {
      nextArr[i] = i + 1;
    }
    setNextDate(nextArr);
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
      <CalDay day={day} />
      <CalDate
        date={date}
        date2={date2}
        year={year}
        month={month}
        // onSetDate2={onSetDate2}
        prevDate={prevDate}
        currDate={currDate}
        nextDate={nextDate}
      />
    </div>
  );
};

export default CalendarPage;
