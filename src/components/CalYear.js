import React, { useState } from "react";

const CalYear = ({ year, onSetYear }) => {
  const todayYear = new Date().getFullYear();
  const yearList = [];
  for (let i = todayYear - 10; i <= todayYear + 10; i++) {
    yearList.push(i);
  }
  const [isYearModal, setIsYearModal] = useState(false);

  return (
    <div className="CalYear">
      {isYearModal ? (
        <ul className="yearList">
          {yearList.map((v) => (
            <li
              key={v}
              onClick={() => {
                onSetYear(v);
                setIsYearModal(false);
              }}
            >
              {v}
            </li>
          ))}
        </ul>
      ) : (
        ""
      )}
      <div
        className="underline cursor"
        onClick={() => setIsYearModal(!isYearModal)}
      >
        {year}
      </div>
    </div>
  );
};

export default CalYear;
