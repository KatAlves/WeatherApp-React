import React from "react";
import axios from "axios";

export default function Weather(props) {
  function alertTemperature(response) {
    
    let temperature = Math.round(response.data.main.temp);
      alert(
         
 `The temperature in ${props.city} is ${temperature}`)
    ;
  }

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=5f472b7acba333cd8a035ea85a0d4d4c&units=metric`;
  axios.get(apiUrl).then(alertTemperature);

  return <h1>Hello World</h1>
}
