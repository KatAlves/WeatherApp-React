import React from "react";
import "./Weather.css";
import Clock from "./Clock";
import Units from "./Units";

export default function Weather(props) {
  return (
    <div className="Weather">
      <Clock date={props.data.date} />

      <ul>
        <li>
          <span id="description">{props.data.description}</span>
        </li>
        <li>
          Humidity: <span id="humidity">{props.data.humidity}</span>%
        </li>
        <li>
          Wind: <span id="wind">{props.data.wind}</span> km/h
        </li>
      </ul>
      <br />
      <div id="temp-special2">
        <span id="currentMin">{props.data.min}</span>
        <span id="currentMax">{props.data.max}</span>
      </div>
      <div className="temperature">
        <Units celsius={props.data.temperature} />
      </div>
    </div>
  );
}
