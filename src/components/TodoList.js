import React from "react";
import TodoListItem from "./TodoListItem";

const TodoList = ({ todos }) => {
  console.log(todos);
  return (
    <div>
      <ul>
        {todos.map((v) => (
          <TodoListItem key={v.id} todo={v} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
