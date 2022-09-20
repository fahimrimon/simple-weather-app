import axios from "axios";
import React, { useEffect, useState } from "react";

const Weather = () => {
  const apiKey = "26da6d25a49232eeb2526ad9222f1b7e";
  const [data, setData] = useState({});
  const [inputCity, setInputCity] = useState("");

  const getWeatherDetails = (cityName) => {
    if (!cityName) return;
    const apiURL = " https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey;

    axios
      .get(apiURL)
      .then((res) => {
        console.log("response", res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  const handleChangeInput = (e) => {
    e.preventDefault();
    setInputCity(e.target.value);
  };


  const handleSearch = () => {
    getWeatherDetails(inputCity);
  };


  useEffect(() => {
    getWeatherDetails("savar");
  }, []);

  return (
    <div>
      <h2>Weather check</h2>
      <input onChange={handleChangeInput} type="text" value={inputCity} className="form-control border-2" />
      <button onClick={handleSearch} className="btn btn-primary" type="button">
        Search
      </button>
      <h2>{data?.name}</h2>
      <p>{(data?.main?.temp - 273.15).toFixed(2)} c</p>
    </div>
  );
};

export default Weather;
