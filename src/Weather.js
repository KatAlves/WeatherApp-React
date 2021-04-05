import React from "react";
import "./Weather.css";
import Clock from "./Clock";


export default function Weather(props) {

 
    return (
      <div className="Weather">
        <Clock date={props.data.date}/>
      
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
          <span className="F-C">
            <a href="#" id="fahrenheit">
              ºF
            </a>
            <span role="img" aria-label="thermometer-emoji">
              🌡️
            </span>
            <a href="#" className="active" id="celsius">
              ºC
            </a>
          </span>
          <span id="temp-special">{props.data.temperature}º</span>
        </div>
      </div>
    )

}
