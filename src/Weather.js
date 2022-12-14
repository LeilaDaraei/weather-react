import React, { useState } from "react";
import axios from "axios";
import { Puff } from "react-loader-spinner";
import "./Weather.css";
export default function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [load, setLoad] = useState(false);

  function handleResponse(response) {
    setLoad(true);
    setWeather({
      name: response.data.name,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "b400bd91e1f55450d6bbdc0410210d96";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  let form = (
    <div>
      <div className="d-flex justify-content-start mb-4">
        <a href="/" alt="Paris" className="me-4 text-decoration-none">
          Paris
        </a>
        <a href="/" alt="Sydney" className="me-4 text-decoration-none">
          Sydney
        </a>
        <a href="/" alt="New York" className="me-4 text-decoration-none">
          New York
        </a>
        <a href="/" alt="Tokyo" className="me-4 text-decoration-none">
          Tokyo
        </a>
      </div>
      <div className="row">
        <form className="col-10 m-0" onSubmit={handleSubmit}>
          <input
            type="text"
            className="col-10 p-1"
            placeholder="enter a city"
            onChange={updateCity}
          />
          <input
            type="submit"
            value="search"
            className="btn btn-primary col-2"
          />
        </form>
        <input
          type="submit"
          value="current"
          className="btn btn-success col-2 m-0"
        />{" "}
      </div>
    </div>
  );

  if (load) {
    return (
      <div className="Weather Container">
        {form}
        <h1>{weather.name}</h1>
        <h2>{weather.temperature}</h2>
        <h2>{weather.description}</h2>
        <div>
          <img src={weather.icon} alt={weather.description} />
        </div>
      </div>
    );
  } else {
    return (
      <div>
        {form}
        <Puff
          height="80"
          width="80"
          radisu={1}
          color="#000"
          ariaLabel="puff-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );
  }
}
