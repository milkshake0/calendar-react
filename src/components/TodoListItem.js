import React from "react";

const TodoListItem = ({ todo }) => {
  return (
    <div>
      {todo.startTime}~{todo.endTime}&nbsp;
      {todo.value}
    </div>
  );
};

export default TodoListItem;
