
import React, { useState } from "react";
const api = {
  key: "4e9546f058fe099976fad0ab17d69eb3",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  const [query, setQuery] = useState('');
  const [weather, setweather] = useState({});

  const search = evt => {
    if (evt.key === "Enter")
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(
          res =>
           res.json()
           )
        .then(result => {
          setweather(result);
          setQuery('');
          // console.log(result);
          console.log('====================================');
          console.log(result);
          console.log('====================================');
        }
        );
  }

  const dateBuilder = (d) => {
    let months = [
      "Yanvar",
       "Fevral", 
       "Mart", 
       "April", 
       "May", 
       "Iyun", 
       "Iyul", 
       "Avgust", 
       "Sentabr", 
       "Oktabr", 
       "Noyabr", 
       "Dekabr"
    ];
    let days = [
      "Yakshanba",
      "Dushanba",
      "Seshanba",
      "Chorshanba",
      "Payshanba",
      "Juma",
      "Shanba",

    ];
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    return `${day}  ${date} ${month} ${year}`
  }
  // console.log(dateBuilder(new Date()));
  // console.log(weather.weather[0].main);
  return (
    <div className={
      (typeof weather.main != "undefined")
        ? ((weather.main.temp > 16)
          ? 'app warm'
          : 'app')
        : 'app'}>
      <main>
      <div className="container">
        <div className="row justify-content-center" >
          <div className="col-lg-7">
          <div className="Search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search....."
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {(typeof weather.main != "undefined") ? (
          <>
            <div className="location-box">
              <div className="location">{weather.name} , {weather.sys.country}</div>
              <div className="date">{dateBuilder(new Date())}</div>
            </div>
            <div className="weather-box">
              <div className="temp">
                {Math.round(weather.main.temp)}
                <sup>.</sup>c <span>🌡</span>
              </div>
              <div className="weather"> {weather.weather[0].main}</div>
            </div>
          </>
        ) : (" ")}
          </div>
        </div>
      </div>
      </main>

    </div>
  );
}

export default App;
