import React from "react";
import "./Clock.css";

export default function Clock() {
  return (
    <div className="Clock">
      <ul>
        <li id="date">16 Jan 2021</li>
        <li id="time">Sat 22:46h</li>
      </ul>
    </div>
  );
}
