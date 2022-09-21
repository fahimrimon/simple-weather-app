import axios from "axios";
import React, { useEffect, useState } from "react";
import weather from "../../Images/weather.jpg";
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
    console.log(e.target.value);
    setInputCity(e.target.value);
  };

  const handleSearch = () => {
    getWeatherDetails(inputCity);
  };

  useEffect(() => {
    getWeatherDetails("new york");
  }, []);


  let showDate = new Date();
  // let displayTodaysDate = showDate.getDate()+'/'+(showDate.getMonth()+1)+'/'+showDate.getFullYear();
  let showDateString = showDate.toDateString();
  let displayTime = showDate.getHours()+':'+showDate.getMinutes();
  return (
    <div className='lg:mx-24 mx-4 lg:mb-24 mb-16 mt-12 lg:mt-2'>
      <div class="card  bg-base-100 shadow-xl">
        <div class="card-body ">
          <div className="lg:grid grid-cols-12 ">
            <div
              style={{
                background: `url(${weather})`,
                backgroundPosition: "center",
               backgroundRepeat: "no - repeat",
               backgroundSize: "cover"
              }}
              className="col-span-8 bg-primary pt-72 pb-20 "
            >
              <div className="text-white flex items-center justify-center space-x-2">
                <div>
                <h2 className="text-7xl font-bold font-mono">
                  {(data?.main?.temp - 273.15).toFixed(0)}°
                </h2>
                </div>
                <div>
                <h2 className="text-4xl font-bold font-mono">{data?.name}</h2>
                <p>{displayTime} - {showDateString}</p>
                </div>
                <div>
                <p className="">{data.weather?.main}</p>
                </div>
              </div>
            </div>


            <div className="col-span-4 bg-slate-700">
            <div className="flex items-center space-x-2 justify-center mt-4 lg:pt-2 pt-4">
            <input onChange={handleChangeInput} type="text" placeholder="Enter city" value={inputCity} className="form-control input h-8 max-w-xs" />
      <button onClick={handleSearch} class="py-0.5 px-4 border rounded border-teal-600 text-white bg-teal-600 font-bold mt-2 mb-3" type="button">
        Search
      </button>
            </div>

            <div className="lg:mx-16 mx-4 text-white pb-8">
                <h2 className="text-lg font-bold mt-12 mb-6">Weather Details</h2>
                <div className="flex items-center justify-between">
                    <h2>Feels like</h2>
                    <h2>{(data?.main?.feels_like - 273.15).toFixed(0)}°</h2>
                </div>
                <div className="flex items-center justify-between my-2">
                    <h2>Humidity</h2>
                    <h2>{data?.main?.humidity}%</h2>
                </div>
                <div className="flex items-center justify-between">
                    <h2>Air Pressure</h2>
                    <h2>{data?.main?.pressure} PS</h2>
                </div>
                <div className="flex items-center justify-between my-2">
                    <h2>Wind Speed</h2>
                    <h2>{data?.wind?.speed} km/h</h2>
                </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
