import React from "react";
import TodoListItem from "./TodoListItem";

const TodoList = ({ todos, onChecked, onRemove, onUpdate }) => {
  return (
    <div className="TodoList">
      <ul>
        {todos.map((v) => (
          <TodoListItem
            key={v.id}
            todo={v}
            onChecked={onChecked}
            onRemove={onRemove}
            onUpdate={onUpdate}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
