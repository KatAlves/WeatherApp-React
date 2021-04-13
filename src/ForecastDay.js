import React from "react";
import WeatherIcon from "./WeatherIcon";



export default function ForecastDay(props) {

function day(){
let date = new Date (props.data.dt * 1000);
let day= date.getDay()
let weekDay = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

return weekDay[day];
}

    return(
<div className="ForecastDay">
<div className= "row">
<div className= "col">
<div className= "Forecast-day">{day()}</div>
<div className= "Forecast-icon"><WeatherIcon code={props.data.weather[0].icon} size= {32}/></div>
<span className= "Forecast-max">{Math.round(props.data.temp.max)}º</span>
<span className= "Forecast-min">{Math.round(props.data.temp.min)}º</span>
</div>
</div>   
</div>);

}