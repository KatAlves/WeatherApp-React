import React, { useState } from "react";

export default function Units(props) {
  const [unit, setUnit] = useState("celsius");
  let fahrenheit = Math.round((props.celsius * 9) / 5 + 32);

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="temperature">
        <span className="units">
          <a href="/" id="fahrenheit" onClick={showFahrenheit}>
            ºF
          </a>
          <span role="img" aria-label="thermometer-emoji">
            🌡️
          </span>
          <a href="/" className="active" id="celsius">
            ºC
          </a>
        </span>
        <span id="temp-special">{props.celsius}º</span>
      </div>
    );
  } else {
    return (
      <div className="temperature">
        <span className="units">
          <a href="/" id="fahrenheit">
            ºF
          </a>
          <span role="img" aria-label="thermometer-emoji">
            🌡️
          </span>
          <a href="/" className="active" id="celsius" onClick={showCelsius}>
            ºC
          </a>
        </span>
        <span id="temp-special">{fahrenheit}º</span>
      </div>
    );
  }
}
