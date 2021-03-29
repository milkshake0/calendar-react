import React, { useEffect, useState } from "react";

const TodoInsert = ({ onInsert, onKeyDownInsert }) => {
  const [value, setValue] = useState("");
  const [startOptionEl, setStartOptionEl] = useState([]);
  const [endOptionEl, setEndOptionEl] = useState([]);
  const [startOption, setStartOption] = useState("1");
  const [endOption, setEndOption] = useState("1");

  const onChangeValue = (e) => {
    setValue(e.target.value);
  };
  const onClick = () => {
    if (value !== "") {
      onInsert(value);
      setValue("");
    }
  };
  const onKeyDown = (e) => {
    if (value !== "") {
      if (e.keyCode === 13) {
        const obj = {
          startOption,
          endOption,
          value,
        };
        onKeyDownInsert(obj);
        setValue("");
      }
    }
  };
  useEffect(() => {
    let a = [];
    for (let i = 1; i < 25; i++) {
      a.push(i);
    }
    const result = a.map((res) => {
      return (
        <option key={res} value={res}>
          {res}
        </option>
      );
    });
    setStartOptionEl(result);
    setEndOptionEl(result);
  }, []);

  const onChangeStartOption = (e) => {
    setStartOption(e.target.value);
  };
  const onChangeEndOption = (e) => {
    setEndOption(e.target.value);
  };

  return (
    <div className="TodoInsert">
      <select onChange={onChangeStartOption}>{startOptionEl}</select>
      <select onChange={onChangeEndOption}>{endOptionEl}</select>
      <input
        type="text"
        onKeyDown={onKeyDown}
        onChange={onChangeValue}
        value={value}
      />
      <button onClick={onClick}>추가</button>
    </div>
  );
};

export default TodoInsert;
