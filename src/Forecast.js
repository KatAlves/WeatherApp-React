import axios from "axios";
import React, { useState, useEffect } from "react";
import ForecastDay from "./ForecastDay";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);


useEffect(()=>{
setLoaded(false);
}, [props.coordinates]
);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="row">
        {forecast.map(function (dailyforecast, index) {
          if (index < 5) {
            return (
              <div className="col" key={index}>
                <ForecastDay data={dailyforecast} />
              </div>
            );
          }
        })}
      </div>
    );
  } else {
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=5f472b7acba333cd8a035ea85a0d4d4c&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
