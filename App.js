import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import CityComponent from "./assets/CityComponent";
import WeatherComponent from "./assets/WeatherInfoComponent";
import GoogleMap from "./assets/GoogleMaps";
import React, { Component } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  box-shadow: 0 3px 6px 0 #555;
  padding: 20px 10px;
  border-radius: 4px;
  width: 480px;
  height: 500px auto;
  background: white;
  font-family: Montserrat;
  font-weight: bold;
`;

const AppLabel = styled.span`
  color: black;
  font-size: 18px;
`;

function App() {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();
  const [currentLocation, updateCurrentLocation] = useState();

  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c2715e187c985c572241682274b9dd65`
    );
    updateWeather(response.data);
  };

  return (
    <div className="flexbox-container">
      <div>
        <Container>
          <AppLabel>glavni kurac</AppLabel>
          {weather ? (
            <WeatherComponent weather={weather} />
          ) : (
            <CityComponent
              updateCity={updateCity}
              fetchWeather={fetchWeather}
            />
          )}
        </Container>
      </div>

      <div>
        <GoogleMap />
      </div>
    </div>
  );
}

export default App;
