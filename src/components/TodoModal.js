import React from "react";
import AddIcon from "@material-ui/icons/Add";
import { useHistory } from "react-router-dom";

const TodoModal = ({ year, month, selectDate }) => {
  const history = useHistory();
  console.log(history);
  const openTodo = () => {
    history.push({ pathname: "/todo", state: { year, month, selectDate } });
  };
  return (
    <div className="TodoModal">
      <div className="modalBox">
        <div className="viewBox">{/* 리스트 뿌리기 */}</div>
        <div className="buttonBox">
          <button onClick={openTodo}>
            <AddIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoModal;
