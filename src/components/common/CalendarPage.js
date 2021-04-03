import React, { useCallback, useEffect, useState } from "react";
import CalYear from "../CalYear";
import CalMonth from "../CalMonth";
import CalDay from "../CalDay";
import CalDate from "../CalDate";
import TodoModal from "../TodoModal";
import axios from "axios";

const CalendarPage = () => {
  const date = new Date();
  const [year, setYear] = useState(date.getFullYear());
  const [month, setMonth] = useState(date.getMonth());
  // eslint-disable-next-line no-unused-vars
  const [day, setDay] = useState(date.getDay());
  // eslint-disable-next-line no-unused-vars
  const [date2, setDate2] = useState(date.getDate());

  const [prevDate, setPrevDate] = useState([]);
  const [currDate, setCurrDate] = useState([]);
  const [nextDate, setNextDate] = useState([]);

  const [isModal, setIsModal] = useState(false);
  const [selectDate, setSelectDate] = useState("");
  const [nextId, setNextId] = useState(
    JSON.parse(localStorage.getItem("todoId") || 0)
  );

  // eslint-disable-next-line no-unused-vars
  const [todosLength, setTodosLength] = useState(0);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    console.log("딱 한번만 실행");
    getTodos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [year]);
  const getTodos = () => {
    try {
      axios
        .get(`http://localhost:4000/todolist/${year}`)
        .then((res) => {
          setTodos(res.data.todos);
          console.log("calendar get success");
        })
        .catch((e) => console.log("calendarPage get: ", e));
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    localStorage.setItem("todoId", JSON.stringify(nextId));
  }, [nextId]);

  const onClickSetIsModal = (bool) => {
    setIsModal(bool);
  };

  const onSetYear = useCallback((year) => {
    setYear(year);
  }, []);

  const onSetMonth = useCallback((month) => {
    setMonth(month);
  }, []);

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

  const onClickNextBtn = useCallback(() => {
    let monthNum = (month % 12) + 1;
    if (monthNum === 12) {
      monthNum = 0;
      onSetYear(year + 1);
    }
    onSetMonth(monthNum);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [month, year]);
  const onClickPrevBtn = useCallback(() => {
    let monthNum = (month - 1 + 12) % 12;
    console.log(monthNum);
    if (monthNum === 11) {
      onSetYear(year - 1);
    }
    onSetMonth(monthNum);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [year, month]);

  const getSelectDate = (date) => {
    console.log(date);
  };

  const closeModal = () => {
    setIsModal(false);
  };

  const onSetSelectDate = (d) => {
    setSelectDate(d);
  };

  const onSetNextId = () => {
    setNextId(nextId + 1);
  };

  const getTodosLength = useCallback((todosLength) => {
    setTodosLength(todosLength);
    getTodos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log("todos: ", todos);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todos]);

  return (
    <div className="CalendarPage">
      {isModal ? (
        <>
          <TodoModal
            year={year}
            month={month}
            selectDate={selectDate}
            onSetNextId={onSetNextId}
            nextId={nextId}
            getTodosLength={getTodosLength}
          />
          <div className="dimBox" onClick={closeModal} />
        </>
      ) : (
        <></>
      )}
      <CalYear year={year} />
      <CalMonth
        date={date}
        month={month}
        onSetYear={onSetYear}
        year={year}
        onSetMonth={onSetMonth}
        onClickNextBtn={onClickNextBtn}
        onClickPrevBtn={onClickPrevBtn}
      />
      <CalDay day={day} />
      <CalDate
        date={date}
        date2={date2}
        year={year}
        month={month}
        prevDate={prevDate}
        currDate={currDate}
        nextDate={nextDate}
        getSelectDate={getSelectDate}
        onClickSetIsModal={onClickSetIsModal}
        onSetSelectDate={onSetSelectDate}
        calTodos={todos}
      />
    </div>
  );
};

export default CalendarPage;
