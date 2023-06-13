import "./App.css";
import { useState } from "react";

function App() {
  const url =
    "https://weatherapi-com.p.rapidapi.com/forecast.json?q=Port%20Coquitlam&days=3";
  const [container, setContainer] = useState([]);
  const [endpoint, setEndpoint] = useState("");
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": `${process.env.REACT_APP_KEY}`,
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  };

  fetch(url, options)
    .then((response) => {
      return response.json();
    })
    .then((data) => setContainer(data.forecast.forecastday))
    .catch((err) => {
      console.log(err);
    });

  return (
    <div className="App">
      <h1> Weather for Port Coquitlam </h1>
      {container.map((element, i) => (
        <div className="dates" key={i}>{element.hour.map((time, i) => createForecast(time, i))}</div>
      ))}
    </div>
  );
}

function createForecast(time, i) {
  return (
    <div className="forecast" key={i}>
      {time.time}
      <br />
      {time.temp_c} °C
      <br />
      {time.condition.text}
      <br />
      <img src={time.condition.icon} alt="weather"/>
    </div>
  );
}

export default App;
