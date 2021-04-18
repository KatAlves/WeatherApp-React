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
     
      </div>

      <span
        role="img"
        aria-label="thermometer-emoji"
        className="main-icon"
        id="icon"
      >
     
        <WeatherIcon code={props.data.icon}
        alt= {props.data.description}
        size= {53}/>

      </span>
      <span className="phrase">
        Feels Like <span id="feelsLike">{props.data.feelsLike}</span>º with
        <span id="descriptionLong"> {props.data.descriptionLong}</span>
      </span>
    </div>
  );
}
