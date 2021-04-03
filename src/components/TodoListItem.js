import React, { useRef, useState } from "react";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import RemoveIcon from "@material-ui/icons/Remove";

const TodoListItem = ({ todo, onChecked, onRemove, onUpdate }) => {
  const [updateValue, setUpdateValue] = useState(todo.value);
  const [isEdit, setIsEdit] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const textareaRef = useRef();
  const divRef = useRef();
  const [textareaHeight, setTextareaHeight] = useState(0);

  const onChangeTextarea = (e) => {
    setUpdateValue(e.target.value);
    resizeTextareaHeight();
  };

  const onClickTextUpdate = () => {
    setIsEdit(true);
    setIsUpdate(true);
    setTextareaHeight(`${divRef.current.scrollHeight}px`);
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      setIsEdit(false);
      onUpdate(todo.id, updateValue);
    }
  };
  const onBlur = () => {
    setIsEdit(false);
    if (isUpdate) {
      onUpdate(todo.id, updateValue);
    } else {
      setUpdateValue(todo.value);
    }
  };

  const resizeTextareaHeight = () => {
    if (textareaRef) {
      setTextareaHeight(`${textareaRef.current.scrollHeight}px`);
      textareaRef.current.style.height = textareaHeight;
    }
  };
  return (
    <li className="TodoListItem">
      <div>
        <span
          className="checkBtn"
          onClick={() => {
            onChecked(todo.id);
            setIsUpdate(false);
          }}
        >
          {todo.checked ? <CheckCircleIcon /> : <CheckCircleOutlineIcon />}
        </span>
      </div>
      {isEdit ? (
        <textarea
          className="text textArea"
          value={updateValue}
          onChange={onChangeTextarea}
          onKeyDown={onKeyDown}
          onBlur={onBlur}
          ref={textareaRef}
          autoFocus
          style={{ height: textareaHeight }}
        />
      ) : (
        <div className="text textDiv" onClick={onClickTextUpdate} ref={divRef}>
          {todo.value}
        </div>
      )}

      <div className="removeBtn">
        <RemoveIcon
          onClick={() => {
            onRemove(todo.id);
            setIsUpdate(false);
          }}
        />
      </div>
    </li>
  );
};

export default TodoListItem;
