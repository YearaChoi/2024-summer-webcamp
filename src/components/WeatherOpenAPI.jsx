import React, { useEffect, useState } from "react";
import styled from "styled-components";

function WeatherOpenAPI() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // 정상적으로 동작할 때 함수
    function onGeoOk(position) {
      const lat = position.coords.latitude; // 위도
      const lon = position.coords.longitude; // 경도
      console.log("You live in", lat, lon);

      // 현재 위치의 날씨를 알려줄 API 연결
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}&units=metric`;

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          if (data && data.weather && data.weather[0]) {
            setWeatherData(data);
          } else {
            setError("Weather data not found");
          }
        })
        .catch((error) => {
          setError(error.message);
        });
    }

    // 위치를 받는데 에러 발생시 함수
    function onGeoError() {
      setError("Can't find you. No weather for you.");
    }

    // 브라우저에서 위치 좌표를 줄 때, 성공, 실패 함수
    navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (!weatherData) {
    return (
      <Wrapper>
        <Loding>날씨 불러오는 중...</Loding>
      </Wrapper>
    );
  }

  const iconUrl = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`;

  return (
    <Wrapper>
      <WeatherPlace>
        {weatherData.name} <img src={iconUrl} alt="Weather Icon" />{" "}
      </WeatherPlace>
      <WeatherInfo>
        {weatherData.weather[0].main} / {weatherData.main.temp}°C
      </WeatherInfo>
    </Wrapper>
  );
}

export default WeatherOpenAPI;

const Wrapper = styled.div`
  border: 0.9px solid #c2c1c1;
  background-color: #f9f9f9;
  width: 100%;
  height: 60px;
  margin-bottom: 10px;
`;

const Loding = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: 15px;
  color: #3a3a3a;
`;

const WeatherPlace = styled.div`
  color: #292929;
  padding-left: 10px;
  padding-top: 10px;
  font-size: 15px;

  img {
    height: 25px;
    vertical-align: middle;
  }
`;

const WeatherInfo = styled.div`
  font-size: 14px;
  padding-left: 10px;
  color: #3a3a3a;
`;
