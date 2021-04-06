import React from "react";
import "./Location.css";
import WeatherIcon from "./WeatherIcon";



export default function Location(props) {
  return (
    <div className="Location">
      <h1>
        <span id="city">{props.data.city}</span>
      </h1>
      <div className="col-12">
        <span className="country">{props.data.country}</span>
        <svg
          id="gpsButton"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-geo-alt-fill"
          viewBox="0 0 16 16"
        >
          <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
        </svg>
      </div>

      <span
        role="img"
        aria-label="thermometer-emoji"
        className="main-icon"
        id="icon"
      >
     
        <WeatherIcon code={props.data.icon}
        alt= {props.data.description}/>

      </span>
      <span className="phrase">
        Feels Like <span id="feelsLike">{props.data.feelsLike}</span>º with
        <span id="descriptionLong"> {props.data.descriptionLong}</span>
      </span>
    </div>
  );
}
