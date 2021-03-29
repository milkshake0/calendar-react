import React, { useCallback, useEffect, useState } from "react";
import TodoInsert from "../TodoInsert";
import TodoList from "../TodoList";
import axios from "axios";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import { useHistory } from "react-router-dom";

const TodoPage = ({ location }) => {
  const history = useHistory();
  const { year, month, selectDate } = location.state;
  const [todos, setTodos] = useState([]);
  const [nextId, setNextId] = useState(3);
  const [checked, setChecked] = useState(false);
  const [currMonthTodos, setCurrMonthTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTodos = async () => {
      setLoading(true);
      try {
        await axios
          .get(`http://localhost:3001/todolist/${year}`)
          .then((res) => {
            const { todos } = res.data;
            console.log(todos);
            setTodos(todos);
          });
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchTodos();
  }, []);

  useEffect(() => {
    const selectTodos = todos.filter((v) => {
      return v["month"] === month && v["date"] === selectDate;
    });
    setCurrMonthTodos(selectTodos);
  }, [todos]);

  const onKeyDownInsert = useCallback(
    ({ startOption, endOption, value }) => {
      setTodos([
        ...todos,
        {
          month,
          selectDate,
          startTime: startOption,
          endTime: endOption,
          value,
          checked: false,
          id: nextId,
        },
      ]);
      // post
      //sort
      setNextId(nextId + 1);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [todos, nextId]
  );
  // const onInsert = useCallback(
  //   () => {
  //     //나중에
  //   }, // eslint-disable-next-line react-hooks/exhaustive-deps
  //   [todos, nextId]
  // );

  // const insertSetTodos=()=>{

  // }

  const goHome = () => {
    history.push("/");
  };

  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <div className="TodoPage">
      <div className="goHomeBtn" onClick={goHome}>
        <NavigateBeforeIcon />
        Calendar
      </div>
      <TodoInsert onKeyDownInsert={onKeyDownInsert} />
      <TodoList todos={currMonthTodos} />
    </div>
  );
};

export default TodoPage;
