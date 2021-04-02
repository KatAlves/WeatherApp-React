import React from "react";
import "./Temperature.css";

export default function Temperature() {
  return (
    <div className="Temperature">
      <ul>
        <li>
          <span id="description"> Rainy</span>
        </li>
        <li>
          Humidity: <span id="humidity">20</span>%
        </li>
        <li>
          Wind: <span id="wind">9</span> km/h
        </li>
      </ul>
      <br />
      <div id="temp-special2">
        <span id="currentMin">15º</span>
        <span id="currentMax">20º</span>
      </div>
      <div className="temperature">
        <span className="F-C">
          <a
            href="https://www.google.com/search?q=fahrenhit&oq=fa&aqs=chrome.2.69i57j69i59l2j69i60l2.3584j0j7&sourceid=chrome&ie=UTF-8"
            id="fahrenheit"
          >
            ºF
          </a>
          <span role="img" aria-label="thermometer-emoji">
            🌡️
          </span>
          <a
            href="https://www.google.com/search?q=celcius&oq=celcius&aqs=chrome..69i57.3786j0j9&sourceid=chrome&ie=UTF-8"
            className="active"
            id="celsius"
          >
            ºC
          </a>
        </span>
        <span id="temp-special">20º</span>
      </div>
    </div>
  );
}
