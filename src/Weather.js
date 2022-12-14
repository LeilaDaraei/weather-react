import React from "react";
import axios from "axios";
import { Puff } from "react-loader-spinner";
export default function Weather() {
  function handleRespomse(response) {
    alert(`the weather in hamburg is ${response.data.main.temp}`);
  }
  let apiKey = "c18b6b68b5cc25859e397f4602261945";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Hamburg&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleRespomse);
  return (
    <Puff
      height="80"
      width="80"
      radisu={1}
      color="#4fa94d"
      ariaLabel="puff-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
}
