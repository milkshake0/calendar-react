import React, { useEffect, useState } from "react";
import TodoInsert from "../TodoInsert";
import TodoList from "../TodoList";
import axios from "axios";

const TodoPage = ({ location }) => {
  const { year, month, selectDate } = location.state;
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodoList();
  }, []);

  const getTodoList = () => {
    axios.get(`http://localhost:3001/todolist/${year}`).then((res) => {
      const { todos } = res.data;
      console.log(todos);
      setTodos(todos);
    });
    // temp1.then((res) => console.log(res));
  };

  const onKeyDownInsert = ({ startOption, endOption, value }) => {
    setTodos([
      ...todos,
      {
        month,
        selectDate,
        startOption,
        endOption,
        value,
      },
    ]);
    // post
  };
  const onInsert = () => {
    //나중에
  };
  console.log(todos);
  return (
    <div className="TodoPage">
      <TodoInsert onKeyDownInsert={onKeyDownInsert} />
      <TodoList />
    </div>
  );
};

export default TodoPage;
