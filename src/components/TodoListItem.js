import React from "react";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import RemoveIcon from "@material-ui/icons/Remove";

const TodoListItem = ({ todo }) => {
  return (
    <li className="TodoListItem">
      <div className="checkBtn">
        {todo.checked ? <CheckCircleIcon /> : <CheckCircleOutlineIcon />}
      </div>
      <div className="text textDiv">{todo.value}</div>
      <div className="removeBtn">
        <RemoveIcon />
      </div>
    </li>
  );
};

export default TodoListItem;
