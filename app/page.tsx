"use client";
import { useState, useEffect } from "react";
import Header from "./Header";
import imagestore from "./store/imagestore";

export default function Home() {
  const [weather, setWeather] = useState({
    location: { localtime: "", name: "" },
    current: {
      temp_c: 0,
      temp_f: 0,
      condition: {
        text: "",
        icon: "",
      },
    },
    forecast: {
      forecastday: [{ date: "" }],
    },
  });
  const currentImage = imagestore((state: any) => state.currentBackground);
  const currentLocation = imagestore((state: any) => state.currentLocation);

  useEffect(() => {
    fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=d24ecdef35224b279ec102038242509&q=${currentLocation}&dt=2024-09-26&days=30`
    )
      .then((res) => res.json())
      .then((json) => setWeather(json));
  }, [currentLocation]);

  return (
    <div
      style={{
        backgroundImage: `url(${currentImage})`,
      }}
      className=" bg-transition p-5 min-h-screen bg-center bg-no-repeat bg-cover"
    >
      <Header />
      <div className="bg-black bg-opacity-25 rounded-lg  px-7  py-3 flex-col mt-3">
        <div className="text-[4rem] text-white font-extrabold text-stroke text-stroke-black text-stroke-1">
          <div className="text-3xl ">{currentLocation}</div>
          <div>Sept. 26</div>
        </div>
        <span className="text-lg text-white opacity-70">
          Updated {weather.location.localtime}
        </span>
      </div>
      <div className="p-8 flex- bg-black bg-opacity-25 rounded-lg mt-4">
        <img
          className="m-0 p-0 justify-center"
          src={weather.current.condition.icon}
          alt=""
        />
        <span className="text-[1.5rem] text-white font-bold font-mono">
          {weather.current.condition.text}
        </span>
        <div className="text-3xl md:text-[3.5rem] text-white font-bold font-serif">
          {weather.current.temp_c}°C/{weather.current.temp_f}°F
        </div>
      </div>
    </div>
  );
}
