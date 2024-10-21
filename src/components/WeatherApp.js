import React, { useState } from 'react';
import { getWeatherData } from '../api/weather';
import WeatherTable from './WeatherTable';  
import Loader from './Loader';              

const WeatherApp = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!city) return;
    setLoading(true);
    const data = await getWeatherData(city);
    setWeatherData(data);
    setLoading(false);
  };

  return (
    <div className="weather-app">
     
      <div className="search-bar">
      <h2>Weather in your city</h2>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={handleSearch} className='search-btn'><spa className='reserv'></spa>Search</button>
      </div>

      {loading ? <Loader /> : weatherData && <WeatherTable data={weatherData} />}
    </div>
  );
};

export default WeatherApp;
