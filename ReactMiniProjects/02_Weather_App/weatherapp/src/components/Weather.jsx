import React, { useState } from 'react';
import axios from 'axios';

const Weather = () => {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  // Get the API key from environment variables
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

  const fetchWeather = () => {
    if (!location) {
      setError('Please enter a location');
      return;
    }

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`
      )
      .then((response) => {
        setWeatherData(response.data);
        setError('');
      })
      .catch((err) => {
        setError('Location not found');
        setWeatherData(null);
      });
  };

  return (
    <div className='h-screen w-full bg-zinc-400'>
      <h1>Weather App</h1>
      <input
        type="text"
        placeholder="Enter location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button onClick={fetchWeather}>Get Weather</button>
      {error && <p>{error}</p>}
      {weatherData && (
        <div>
          <h2>{weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Wind Speed: {weatherData.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
