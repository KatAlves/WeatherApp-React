import React from "react";
import "./Weather.css";
import Clock from "./Clock";
import Units from "./Units";

export default function Weather(props) {
  return (
    <div className="Weather">
      <Clock date={props.data.date} />
<br />

      <ul>
      
        <li>
           <span id="humidity">Humidity: {props.data.humidity}</span>%
        </li>
        <li>
         <span id="wind"> Wind: {props.data.wind}</span> km/h
        </li>
      </ul>
      
      <div id="temp-special2">
        <span id="currentMax">{props.data.max}</span>
           <span id="currentMin">{props.data.min}</span>
      </div>
      <div className="temperature">
        <Units celsius={props.data.temperature} />
      </div>
    </div>
  );
}
