import React, { useEffect, useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import TodoInsert from "./TodoInsert";
import TodoList from "./TodoList";
import axios from "axios";

const TodoModal = ({ year, month, selectDate }) => {
  const [todos, setTodos] = useState([]);
  const [currTodos, setCurrTodos] = useState([]);
  const [isInsert, setIsInsert] = useState(false);

  useEffect(() => {
    const getTodos = async () => {
      try {
        await axios
          .get(`http://localhost:4000/todolist/${year}`)
          .then((res) => setTodos(res.data.todos));
      } catch (e) {
        console.log(e);
      }
    };
    getTodos();
  }, [selectDate, year, month]);

  useEffect(() => {
    const temp = todos.filter(
      (todo) => todo.month === month && todo.date === selectDate
    );
    setCurrTodos(temp);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todos]);

  const onInsert = (value) => {
    setTodos([
      ...todos,
      {
        id: todos.length,
        value,
        checked: false,
        month,
        date: selectDate,
      },
    ]);
    setIsInsert(true);
  };

  useEffect(() => {
    if (!isInsert) return false;
    const postTodos = async () => {
      console.log("todos: ", todos);
      const data = { id: year, todos: todos };
      try {
        await axios
          .delete(`http://localhost:4000/todolist/${year}`)
          .then((res) => console.log(res))
          .catch((e) => console.log("delete: ", e));
        await axios
          .post(`http://localhost:4000/todolist`, data)
          .then((res) => console.log(res))
          .catch((e) => console.log("post: ", e));
      } catch (e) {
        console.log(e);
      }
    };
    postTodos();
    setIsInsert(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInsert]);

  return (
    <div className="TodoModal">
      <p className="selectDate">
        {year}. {`${month}`.length === 1 ? `0${month + 1}` : month + 1} .
        {`${selectDate}`.length === 1 ? `0${selectDate}` : selectDate}
      </p>
      <TodoInsert onInsert={onInsert} />
      <TodoList
        todos={currTodos}
        year={year}
        month={month}
        selectDate={selectDate}
      />
      <div className="dimGradient"></div>
    </div>
  );
};

export default TodoModal;
