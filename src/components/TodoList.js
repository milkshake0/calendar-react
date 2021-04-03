import React, { useEffect } from "react";
import TodoListItem from "./TodoListItem";

const TodoList = ({
  todos,
  onChecked,
  onRemove,
  onUpdate,
  getTodosLength,
  isChgLength,
}) => {
  useEffect(() => {
    if (isChgLength) getTodosLength(todos.length);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todos.length, isChgLength]);

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
