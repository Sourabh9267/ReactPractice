import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Weather = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState('');
    const [location, setLocation] = useState('');
    const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY; // Ensure you have your API key set

    const fetchWeather = (lat, lon) => {
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

        axios.get(url)
            .then(response => {
                setWeatherData(response.data);
                setError('');
            })
            .catch(err => {
                console.error('Error:', err.response ? err.response.data : err.message);
                setError('Location not found or invalid API key');
                setWeatherData(null);
            });
    };

    const handleSearch = (e) => {
        e.preventDefault();
        if (location.trim() === '') return;
        const Nlocation=location.toLowerCase();
        // Use the Geocoding API to get latitude and longitude
        const geocodeUrl = `https://api.openweathermap.org/data/2.5/weather?q=${Nlocation}&appid=${apiKey}`;
        
        axios.get(geocodeUrl)
            .then(response => {
                const { coord } = response.data;
                fetchWeather(coord.lat, coord.lon);
                setLocation('');
            })
            .catch(err => {
                setError('Location not found');
                setWeatherData(null);
            });
    };

    return (
        <div className="flex flex-col items-center justify-center bg-gray-100 h-screen">
            <h1 className="text-3xl font-bold mb-4">Current Weather</h1>
            <form onSubmit={handleSearch} className="mb-4">
                <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Enter location..."
                    className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button type="submit" className="ml-2 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Search</button>
            </form>
            {error && <p className="text-red-500">{error}</p>}
            {weatherData && (
                <div className="bg-white bg-opacity-50 backdrop-blur-md rounded-lg p-6 shadow-lg w-80">
                    <h2 className="text-xl font-semibold">Weather in {weatherData.name}, {weatherData.sys.country}</h2>
                    <p>Temperature: {Math.round(weatherData.main.temp - 273.15)}°C</p>
                    <p>Feels Like: {Math.round(weatherData.main.feels_like - 273.15)}°C</p>
                    <p>Description: {weatherData.weather[0].description}</p>
                    <p>Wind Speed: {weatherData.wind.speed} m/s</p>
                    <p>Humidity: {weatherData.main.humidity}%</p>
                </div>
            )}
        </div>
    );
};

export default Weather;
