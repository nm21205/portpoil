// src/page/Homepage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Footer from '../components/Footer';
import Main from '../components/main';

import '../page/Weather.scss';


const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

const Weather = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const fetchWeather = async (searchCity) => {
    try {
      console.log('API Key:', apiKey);
      
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${apiKey}&units=metric`
      );
      
      console.log('Response status:', response.status);
      
      if (!response.ok) {
        throw new Error('City not found');
      }
      const data = await response.json();
      console.log('Weather data:', data);
      
      setWeather(data);
      setError(null);
    } catch (err) {
      console.error('Error:', err);
      setError(err.message);
      setWeather(null);
    }
  };

  const handleSearch = () => {
    if (city) {
      fetchWeather(city);
    }
  };

  const handleDetailPage = () => {
    if (weather) {
      navigate(`/weatherdetails/${weather.name}`);
    }
  };

  // 주요 도시 목록을 한글명과 영문명을 함께 가지도록 수정
  const majorCities = [
    { name: "서울", engName: "Seoul", id: 0 },
    { name: "도쿄", engName: "Tokyo", id: 1 },
    { name: "파리", engName: "Paris", id: 2 },
    { name: "런던", engName: "London", id: 3 },
    { name: "뉴욕", engName: "New York", id: 4 }
  ];

  // 도시 버튼 클릭 핸들러 수정
  const handleCityClick = (engName) => {
    setCity(engName);
    fetchWeather(engName);
  };

  return (
    <>
      <Main />
      <div className="weather-container">
        <h1>Weather search</h1>
        <div className="search-box">
          <input
            type="text"
            placeholder="도시 이름 입력"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button onClick={handleSearch}>검색</button>
        </div>
        
        {/* 주요 도시 버튼들 */}
        <div className="major-cities">
          {majorCities.map(city => (
            <button 
              key={city.id}
              onClick={() => handleCityClick(city.engName)}
            >
              {city.name}
            </button>
          ))}
        </div>

        {error && <p className="error-message">{error}</p>}
        {weather && (
          <div className="weather-info">
            <div className="info-box">
              <h2>city: {weather.name}</h2>
              <p>temperature: {weather.main.temp}°C</p>
              <p>weather: {weather.weather[0].description}</p>
              <button onClick={handleDetailPage}>DETAILPAGE</button>
            </div>
            <div className="map-box">
              <MapContainer
                center={[weather.coord.lat, weather.coord.lon]}
                zoom={13}
                style={{ height: '100%', width: '100%' }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={[weather.coord.lat, weather.coord.lon]}>
                  <Popup>
                    {weather.name}: {weather.weather[0].description}
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Weather;