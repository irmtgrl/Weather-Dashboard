import "./App.css";
import { Weather } from "./components/Weather";
import { Greeting } from "./components/Greeting";
import { Hourly } from "./components/Hourly";
import { Wind } from "./components/Wind";
import { Humidity } from "./components/Humidity";
import { useEffect, useState } from "react"

export function App() {
  const [ weatherData, setWeatherData ] = useState(null);

  async function search (city) {
    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`
        const res = await fetch(url)
        const data = await res.json()
        console.log(data)
        setWeatherData({
            city: data.name,
            temperature: Math.floor(data.main.temp),
            wind: data.wind.speed,
            humidity: data.main.humidity,
            icon: data.weather[0].icon,
        })
    } catch (err) {
       console.log(err)
    }
  }

  useEffect(() => {
      search("Barcelona")
  }, [])

  return (
    <main className="px-auto w-1/2 flex justify-center items-center">
      <div className="inline-grid grid-cols-5 grid-rows-3 2xl:gap-4 xl:gap-2">
        <Greeting /> 
        <Weather />
        <Hourly 
          temp={weatherData.temperature}
          name={weatherData.city}
        />
        <Wind 
          wind={weatherData.wind}
        />
        <Humidity
          humidity={weatherData.humidity}
        />
      </div>
    </main>
  )
}