import React, { useRef, useState } from "react";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import RemoveIcon from "@material-ui/icons/Remove";

const TodoListItem = ({ todo, onChecked, onRemove, onUpdate }) => {
  const [updateValue, setUpdateValue] = useState(todo.value);
  const [isEdit, setIsEdit] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const inputTodo = useRef();

  const onClickTextUpdate = () => {
    setIsEdit(true);
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      console.log("keyDown 발생");
      setIsEdit(false);
      onUpdate(todo.id, updateValue);
    }
  };
  const onBlur = () => {
    console.log("blur 발생");
    setIsEdit(false);
    if (isUpdate) {
      onUpdate(todo.id, updateValue);
    } else {
      setUpdateValue(todo.value);
    }
  };

  if (isEdit) {
    console.log(inputTodo.current);
  }
  return (
    <li className="TodoListItem">
      <div
        className="checkBtn"
        onClick={() => {
          onChecked(todo.id);
          setIsUpdate(true);
        }}
      >
        {todo.checked ? <CheckCircleIcon /> : <CheckCircleOutlineIcon />}
      </div>
      {isEdit ? (
        <textarea
          className="text textArea"
          value={updateValue}
          onChange={(e) => setUpdateValue(e.target.value)}
          onKeyDown={onKeyDown}
          onBlur={onBlur}
          ref={inputTodo}
        />
      ) : (
        <div className="text textDiv" onClick={onClickTextUpdate}>
          {todo.value}
        </div>
      )}

      <div
        className="removeBtn"
        onClick={() => {
          console.log("onRemove 발생");
          onRemove(todo.id);
          setIsUpdate(true);
        }}
      >
        <RemoveIcon />
      </div>
    </li>
  );
};

export default TodoListItem;
