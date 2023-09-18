import { TiWeatherPartlySunny } from "react-icons/ti";
import { convertUtcToLocaleTimeWithAMPM } from "../../assets/utily";
import { useEffect, useState } from "react";

const WeatherFild = ({ criptoData }) => {
  if (!criptoData) {
    // Handle the case where criptoData is not defined
    return null; // or return some default content or loading indicator
  }

  const { main, name, sys, weather, wind } = criptoData;
  // console.log(weather);

  const converdTemperature = main?.temp - 273.15;
  const { icon } = weather?.[0] || { icon: 0 };
  // console.log(weatherIcon);
  console.log(sys);
  const { sunrise, sunset } = sys || {};

  const sunRise = convertUtcToLocaleTimeWithAMPM(sunrise);
  const sunSet = convertUtcToLocaleTimeWithAMPM(sunset);

  return (
    <div>
      <div className="p-4 text-center rounded-md custom-card">
        <h2 id="cityName" className="text-2xl font-semibold">
          {name}
        </h2>
        {/* Current weather display */}
        <h2 className="text-4xl font-semibold">
          {converdTemperature.toFixed(2)}°C
        </h2>
        <div className="flex justify-center mx-auto ">
          <p className="flex items-center justify-center text-3xl">
            Sunny
            <img
              src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
              alt=""
            />
          </p>
        </div>
        {/* Weather icon */}
        {/* <img
          src="https://example.com/path-to-weather-icon.png"
          alt="WeatherIcon"
          className="w-20 h-20 mx-auto"
        /> */}

        {/* Additional weather information */}
        <p>Humidity: {main?.humidity}%</p>
        <p>Wind Speed: {wind?.speed} mph</p>
        <p>Sunrise: {sunRise} </p>
        <p>Sunset: {sunSet} </p>
      </div>
    </div>
  );
};

export default WeatherFild;
