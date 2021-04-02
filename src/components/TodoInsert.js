import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };
  const onClick = () => {
    if (value === "") return false;
    onInsert(value);
    setValue("");
  };
  const onKeyDown = (e) => {
    if (value === "") return false;
    if (e.keyCode === 13) {
      onInsert(value);
      setValue("");
    }
  };

  return (
    <div className="TodoInsert">
      <input
        type="text"
        onChange={onChange}
        value={value}
        onKeyDown={onKeyDown}
      />
      <AddIcon className="btn" onClick={onClick} />
    </div>
  );
};

export default TodoInsert;
