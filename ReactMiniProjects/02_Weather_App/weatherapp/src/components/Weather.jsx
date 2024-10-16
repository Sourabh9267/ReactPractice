import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Weather = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState('');
    const [location, setLocation] = useState('Bhopal'); // default city
    const [inputLocation, setInputLocation] = useState('');

    const apiKey = 'f73a898f8c74a6d09f20d63088b4a9dd'; // Use your API key

    const fetchWeather = (city) => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        axios.get(url)
            .then((response) => {
                setWeatherData(response.data);
                setError('');
            })
            .catch((err) => {
                console.error('Error:', err.response ? err.response.data : err.message);
                setError('Location not found or invalid API key');
                setWeatherData(null);
            });
    };

    const handleSearch = (e) => {
        e.preventDefault();
        if (inputLocation.trim() !== '') {
            fetchWeather(inputLocation);
        }
    };

    useEffect(() => {
        fetchWeather(location); // Fetch weather for default location on component mount
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-300 to-blue-500">
            <div className="w-full max-w-md p-6 bg-white bg-opacity-30 rounded-lg shadow-lg backdrop-filter backdrop-blur-lg">
                <h1 className="text-2xl font-semibold text-center text-gray-900 mb-4">Current Weather</h1>

                {/* Search Form */}
                <form onSubmit={handleSearch} className="flex justify-center mb-4">
                    <input
                        type="text"
                        value={inputLocation}
                        onChange={(e) => setInputLocation(e.target.value)}
                        className="px-4 py-2 rounded-l-md text-gray-700 bg-white bg-opacity-50 focus:outline-none"
                        placeholder="Enter city name"
                    />
                    <button
                        type="submit"
                        className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none"
                    >
                        Search
                    </button>
                </form>

                {/* Weather Info */}
                {error && <p className="text-red-500 text-center">{error}</p>}
                {weatherData && (
                    <div className="p-4 bg-white bg-opacity-50 rounded-lg shadow-lg backdrop-filter backdrop-blur-md">
                        <h2 className="text-xl font-bold text-center text-gray-800">
                            Weather in {weatherData.name}, {weatherData.sys.country}
                        </h2>
                        <p className="text-center text-gray-700">
                            Temperature: {weatherData.main.temp} °C
                        </p>
                        <p className="text-center text-gray-700">
                            Feels Like: {weatherData.main.feels_like} °C
                        </p>
                        <p className="text-center text-gray-700">
                            {weatherData.weather[0].description.charAt(0).toUpperCase() +
                                weatherData.weather[0].description.slice(1)}
                        </p>
                        <p className="text-center text-gray-700">Wind Speed: {weatherData.wind.speed} m/s</p>
                        <p className="text-center text-gray-700">Humidity: {weatherData.main.humidity}%</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Weather;
