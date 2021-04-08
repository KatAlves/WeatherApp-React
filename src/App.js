import React, { useState } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Location from "./Location";
import Weather from "./Weather";
import Footer from "./Footer";
import axios from "axios";

export default function App() {
  const [weather, setWeather] = useState({ ready: false });
  const [city, setCity] = useState("Lisbon");

  function handleResponse(response) {
    setWeather({
      ready: true,
      city: response.data.name,
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].main,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      icon: response.data.weather[0].icon,
      min: `${Math.round(response.data.main.temp_min)}↓ `,
      max: `${Math.round(response.data.main.temp_max)}↑`,
      date: new Date(response.data.dt * 1000),
      feelsLike: `${Math.round(response.data.main.feels_like)}`,
      descriptionLong: response.data.weather[0].description,
      country: response.data.sys.country,
    });
  }

  function SearchCity() {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5f472b7acba333cd8a035ea85a0d4d4c&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleOnChange(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    SearchCity();
  }

  if (weather.ready) {
    return (
      <div className="container">
        <div className="weather-app">
          <div className="row">
            <div className="col-xs-sm-6">
              <div className="Form">
                <form onSubmit={handleSubmit}>
                  <input
                    type="Search"
                    placeholder="Enter a city..."
                    onChange={handleOnChange}
                    autoComplete="off"
                    autoFocus={true}
                    id="city-input"
                  />

                  <input className="Button" type="submit" value="Go!" />
                </form>
              </div>

              <Location data={weather} />
            </div>
            <br />
            <Weather data={weather} />
          </div>
        </div>
        <Footer />
      </div>
    );
  } else {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5f472b7acba333cd8a035ea85a0d4d4c&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
    
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
