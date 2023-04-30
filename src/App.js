import './App.css';

function App() {

const url = 'https://weatherapi-com.p.rapidapi.com/forecast.json?q=Port%20Coquitlam&days=3';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2b10ed8bf0mshf932300b1d08a77p1cc1c5jsna54bf010044c',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

fetch(url, options).then(response => {
  console.log(response);
})
.catch(err => {
  console.log(err);
})

  return (
    <div className="App">
      <div>
        hi
      </div>
    </div>
  );
}

export default App;
