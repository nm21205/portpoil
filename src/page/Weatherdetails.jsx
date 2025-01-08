// src/page/WeatherDetails.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../page/Weatherdetails.scss'; 
import Footer from '../components/Footer';
import Main from '../components/main';

const WeatherDetails = () => {
  const { city } = useParams();
  const [forecast, setForecast] = useState(null);
  const [coordinates, setCoordinates] = useState(null);
  const [error, setError] = useState(null);

  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const coordResponse = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );
        const coordData = await coordResponse.json();
        setCoordinates(coordData.coord);

        const forecastResponse = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
        );
        const forecastData = await forecastResponse.json();
        setForecast(forecastData);
        setError(null);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchWeatherData();
  }, [city, apiKey]);

  if (!forecast || !coordinates) return <div>Loading...</div>;

  return (
    <>
    <Main />
    <div className="weather-details-page">
      <h1>Weather forecast for {city} - Next 5 days</h1>
      {error && <p className="weather-details-error">{error}</p>}
      <div className='weather-details-container'>
        {forecast.list
          .filter((item, index) => index % 8 === 0)
          .map((item, index) => (
            <div key={index} className="weather-details-card">
              <h3>{new Date(item.dt * 1000).toLocaleDateString()}</h3>
              <p>온도: {item.main.temp}°C</p>
              <p>날씨: {item.weather[0].description}</p>
              <p>습도: {item.main.humidity}%</p>
            </div>
          ))}
      </div>
      <div className="map-container" style={{ height: '400px', marginTop: '20px' }}>
        <MapContainer
          center={[coordinates.lat, coordinates.lon]}
          zoom={13}
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[coordinates.lat, coordinates.lon]}>
            <Popup>
              {city}
            </Popup>
          </Marker>
        </MapContainer>
      </div>
      <Footer />
    </div>
    </>
  );
};

export default WeatherDetails;