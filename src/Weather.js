import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import Clock from "./Clock";


export default function Weather(props) {
  const [weather, setWeather] = useState({ ready: false });
 function handleResponse(response) {
    setWeather({
      ready: true,
      city: response.data.name,
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      min: `${Math.round(response.data.main.temp_min)}↓ `,
      max: `${Math.round(response.data.main.temp_max)}↑`,
     date: new Date(response.data.dt*1000)

    });
  }
  if (weather.ready) {
    return (
      <div className="Weather">
        <Clock date={weather.date}/>
        <ul>
          <li>
            <span id="description">{weather.description}</span>
          </li>
          <li>
            Humidity: <span id="humidity">{weather.humidity}</span>%
          </li>
          <li>
            Wind: <span id="wind">{weather.wind}</span> km/h
          </li>
        </ul>
        <br />
        <div id="temp-special2">
          <span id="currentMin">{weather.min}</span>
          <span id="currentMax">{weather.max}</span>
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
          <span id="temp-special">{weather.temperature}º</span>
        </div>
      </div>
    );
  } else {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=5f472b7acba333cd8a035ea85a0d4d4c&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
