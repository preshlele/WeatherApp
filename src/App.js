import React, { useState } from "react";
import axios from "axios";
import "./input.css";

const url = {
  key: "30b67a84f1ebff2f16538488df4129cc",
  base: "https://api.openweathermap.org/data/2.5/",
};

// console.log(url);

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const weatherApi = `${url.base}weather?q=${location}&units=imperial&appid=${url.key}`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(weatherApi).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation('');
    }
    
  };

  return (
    <div
      className="w-full h-screen relative bg-backround-img bg-center top-0 left-0 before:bg-no-repeat bg-cover  before:absolute before:content-none
     bg-gray-400 text-white font-Poppins box-border"
    >
      <div className="text-center p-4">
        {/* <input
         type="search"
         value={data}
         onChange={(e) => setData(e.target.value)}
         onKeyPress={searchLocation}
         placeholder="Enter location"
        className='text-xl py-3 px-6 rounded-2xl border-solid border-white border-2 bg-black opacity-60 text-white'
        
        /> */}

        <input
          type="text"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Enter Location "
          className='text-xl py-3 px-6 rounded-2xl border-solid border-white border-2 bg-black opacity-60 text-white'
        />
      </div>
      <div className="container max-w-3xl h-5/6 m-auto px-4 top-5 flex flex-col justify-between ">
        <div className="top w-full my-4 flex flex-col items-center">
          <div className="location">
            <p className="text-2xl text-black">{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1 className="text-8xl text-black">{data.main.temp.toFixed()}°F</h1> : null }
          </div>
          <div className="description relative -right-90 origin-right">
           { data.main ? <p className="text-2xl text-black">{data.weather[0].description}</p>: null} 
          </div>
        </div>

        {data.name != undefined &&
        <div className="bottom flex justify-evenly text-center w-full my-4 p-4 rounded-xl text-black bg-neutral-100">
          <div className="feels">
            {data.main ? <p className="text-2xl font-bold">{data.main.pressure.toFixed()}</p>: null}
            <p className="text-xl">Pressure</p>
          </div>
          <div className="humidity">
            {data.main ? <p className="text-2xl font-bold">{data.main.humidity} hpa</p>: null}
            <p className="text-xl">Humidity</p>
          </div>
          <div className="winds">
            {data.main ? <p className="text-2xl font-bold">{data.wind.speed} mpH</p> : null}
            <p className="text-xl">Wind</p>
          </div>
        </div>
        }
        
      </div>
    </div>
  );
}

export default App;
