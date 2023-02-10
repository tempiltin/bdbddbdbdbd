import React, { useEffect, useState } from 'react'
import "../../Styles/Navbar/Navbar.css";
import data from "../../DB/Navbar"
import { BsArrowUpRight, BsArrowDownRight } from "react-icons/bs";
const api = {
  key: "4e9546f058fe099976fad0ab17d69eb3",
  base: "https://api.openweathermap.org/data/2.5/"
}

console.log('====================================');
console.log(data);
console.log('====================================');
const Navbar = () => {
  const [data, setData] = useState({});
  const [valuta, setValuta] = useState({});
  const [weather, setweather] = useState({});
  const ValutaFonction = () => {
    fetch("https://nbu.uz/uz/exchange-rates/json/")
      .then((response) => response.json())
      .then((data) => setData(data.find(item => item.code === "USD"))).catch(error => console.log(error))
  }
  const WeatherFunction = () => {
    fetch(`${api.base}weather?q=${"Samarqand"}&units=metric&APPID=${api.key}`)
      .then(
        res =>
          res.json()
      )
      .then(result => {
        setweather(result);
        // console.log(result);
        console.log('====================================');
        console.log(result);
        console.log('====================================');
      }
      ).catch(error => console.log(error))
  }

  useEffect(() => {
    Promise.all([
      ValutaFonction(),
      WeatherFunction()
    ])
    //===============================================================================

  }, [])



  
  return (
    <header className="header_navbar d-flex align-items-center ">
      <div className="container-fluid">
        <div className="row justify-content-between align-items-center">
          <div className="col-auto">
            <ul className='d-flex p-0 m-0'>
              <li className='p_temp-2'>String</li>
              <li className='p_temp-2'>String</li>
              <li className='p_temp-2'>String</li>
              <li className='p_temp-2'>String</li>
              <li className='p_temp-2'>String</li>
              <li className='p_temp-2'>String</li>
              <li className='p_temp-2'>String</li>
              <li className='p_temp-2'>String</li>
              <li className='p_temp-2'>String</li>
            </ul>
          </div>
          <div className="col-auto">
          <ul className='d-flex p-0 m-0'>
            <li className='p_temp-2'>{weather.name}</li>
            <li className='p_temp-2'>
              {Math.round(weather.main.temp)}
              <sup>.</sup>c <span>🌡</span>
            </li>
            <li className='p_temp-2'>{weather.weather[0].main} </li>

          </ul> 
          </div>
          <div className="col-auto">
            <ul className='d-flex p-0 m-0'>
              <li className='p_temp-2'>{data.title}</li>
              <li className='p_temp-2'>$ 1 &nbsp;=&nbsp;
                {data.cb_price} so'm &nbsp;
                {data.cb_price >= 11000 ? <BsArrowUpRight /> : <BsArrowDownRight />}

              </li>

            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar