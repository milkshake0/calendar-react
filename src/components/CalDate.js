import React from "react";

const CalDate = () => {
  return (
    <div className="CalDate">
      <ul>
        <li className="prevMonth">
          <span>28</span>
        </li>
        <li>
          <span>1</span>
        </li>
        <li>
          <span>2</span>
        </li>
        <li>
          <span>3</span>
        </li>
        <li>
          <span>4</span>
        </li>
        <li className="today">
          <span>5</span>
        </li>
        <li>
          <span>6</span>
        </li>
        <li>
          <span>7</span>
        </li>
        <li>
          <span>8</span>
        </li>
        <li>
          <span>9</span>
        </li>
        <li>
          <span>10</span>
        </li>

        <li className="nextMonth">
          <span>1</span>
        </li>
        <li className="nextMonth">
          <span>2</span>
        </li>
        <li className="nextMonth">
          <span>3</span>
        </li>
      </ul>
    </div>
  );
};

export default CalDate;
