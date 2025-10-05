import "./App.css";
import { Weather } from "./components/Weather";
import { Greeting } from "./components/Greeting";
import { Hourly } from "./components/Hourly";
import { Activity } from "./components/Activity";
import { Sun } from "./components/Sun";
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
            country: data.sys.country,
            temperature: Math.floor(data.main.temp),
            description: data.weather[0].main,
            wind: data.wind.speed,
            humidity: data.main.humidity,
            icon: data.weather[0].icon,
            sunrise: data.sys.sunrise,
            sunset: data.sys.sunset,
        })
        console.log(weatherData)
    } catch (err) {
       console.log(err)
    }
  }

  useEffect(() => {
      search("Istanbul")
  }, [])

  return (
    <main className="flex justify-center items-center">
      <div className="inline-grid grid-cols-5 grid-rows-3 2xl:w-[800px] 2xl:h-[400px] md:w-[600px] md:[300px] xs:w-[400] xs:h-[250] 2xl:gap-4 xl:gap-2 md:gap-2 sm:gap-2 xs:gap-2">
        <Greeting /> 
        <Weather 
          temp={weatherData?.temperature ?? "--"}
          description={weatherData?.description ?? "--"}
          icon={ weatherData?.icon ?? "--"}
        />
        <Hourly 
          temp={weatherData?.temperature ?? "--"}
          name={weatherData?.city ?? "Loading..."}
          country={weatherData?.country ?? "--"}
          description={weatherData?.description ?? "--"}
          icon={weatherData?.icon ?? "--"}
          wind={weatherData?.wind ?? "--"}
          humidity={weatherData?.humidity ?? "--"}
        />
        <Activity 
          temp={weatherData?.temperature ?? "--"}
          wind={weatherData?.wind ?? "--"}
        />
        <Sun
          sunrise={weatherData?.sunrise ?? "--"}
          sunset={weatherData?.sunset ?? "--"}
        />
      </div>
    </main>
  )
}