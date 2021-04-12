import axios from "axios";
import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function Forecast(props) {

function handleResponse(response){
    console.log(response.data)

}

let latitude= props.coordinates.lat;
let longitude=props.coordinates.lon;
let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=5f472b7acba333cd8a035ea85a0d4d4c&units=metric`
axios.get(apiUrl).then(handleResponse);

    return(
<div className= "row">
<div className= "col">
<div className= "Forecast-day">Mon</div>
<div className= "Forecast-icon"><WeatherIcon code="01d" size= {32}/></div>
<span className= "Forecast-max">14º</span>
<span className= "Forecast-min">10º</span>
</div>
</div>    


    )
}