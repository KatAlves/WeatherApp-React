import React from "react";
import "./App.css";


export default function Clock(props) {
let weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
let day = weekDays[props.date.getDay()];
let hours= props.date.getHours();
if (hours < 10){hours=`0${hours}`};
let minutes= props.date.getMinutes();
if (minutes < 10){minutes=`0${minutes}`};

  return (
    <div className="Clock">
      <ul>
        <li>{day}</li>
        <li>{hours}:{minutes}</li>
      </ul>
    </div>
  );
}
