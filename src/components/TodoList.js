import React from "react";
import TodoListItem from "./TodoListItem";

const TodoList = ({ todos }) => {
  return (
    <div className="TodoList">
      <ul>
        {todos.map((v) => (
          <TodoListItem key={v.id} todo={v} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
