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
      {container.map((element, i) => (
        // <div>
        //   {element.date}
        //   </div>
        element.hour.map(time => createForecast(time))
      ))}
    </div>
  );
}

function createForecast(time) {
  return (
    <div>
      {time.time}
      {time.temp_c}
      {time.condition.text}
      <img src={time.condition.icon}/>
    </div>
  )
}

export default App;
