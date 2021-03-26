import React from "react";

const CalDay = () => {
  return (
    <div className="CalDay">
      <ul>
        <li>
          <span>SUN</span>
        </li>
        <li>
          <span>MON</span>
        </li>
        <li>
          <span>TUE</span>
        </li>
        <li>
          <span>WED</span>
        </li>
        <li>
          <span>THU</span>
        </li>
        <li className="today">
          <span>FRI</span>
        </li>
        <li>
          <span>SAT</span>
        </li>
      </ul>
    </div>
  );
};

export default CalDay;
