import React from "react";

const CalDay = ({ day }) => {
  const dayArr = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  return (
    <div className="CalDay">
      <ul>
        {dayArr.map((v, i) => (
          <li key={v} className={day === i ? `today` : ``}>
            <span>{v}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CalDay;
