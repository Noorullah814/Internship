import React, { useState } from 'react';
import InputField from './components/InputField';

function App() {

  const [city, setCity] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getWeatherClass = (condition) => {

    if (!condition) return '';

    const c = condition.toLowerCase();

    if (c.includes('clear')) return 'clear';
    if (c.includes('cloud')) return 'clouds';
    if (c.includes('rain') || c.includes('drizzle')) return 'rain';
    if (c.includes('thunder')) return 'rain';

    return 'clear'; // default fallback
  };

  const getWeatherIcon = (condition) => {

    if (!condition) return "☀️";

    const c = condition.toLowerCase();

    if (c.includes('clear')) return "☀️";
    if (c.includes('cloud')) return "☁️";
    if (c.includes('rain') || c.includes('drizzle')) return "🌧️";
    if (c.includes('thunder')) return "⛈️";
    if (c.includes('snow')) return "❄️";

    return "🌤️";
  };

  const fetchWeather = async () => {
    setLoading(true);
    setError("");

    if (!city.trim()) {
      setError("Please enter a city name");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7e3169982e07c4b3c15d6dabc8c3ec5d&units=metric`
      );

      const result = await response.json();

      if (result.cod !== 200) {
        throw new Error(result.message || "City not found");
      }

      setData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <h1>Weather App</h1>

      <InputField
        fetchWeather={fetchWeather}
        city={city}
        setCity={setCity}
      />

      {loading && <p className="loading">Fetching weather...</p>}

      {error && <p className="error">{error}</p>}

      {data && (
        <div className={`weather-card ${getWeatherClass(data.weather[0].main)}`}>

          <div className="card-bg-effects">

</div>

          <h2>{data.name}</h2>
          <div className="weather-icon">
            {getWeatherIcon(data.weather[0].main)}
          </div>
          <p className="temp">{Math.round(data.main.temp)} °C</p>
          <p className="condition">{data.weather[0].description}</p>

          <div className="details">
            <div className="detail-item">
              <strong>{data.main.humidity}%</strong>
              <span>Humidity</span>
            </div>
            <div className="detail-item">
              <strong>{data.wind.speed} m/s</strong>
              <span>Wind Speed</span>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default App;