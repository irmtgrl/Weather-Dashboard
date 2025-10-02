import { useEffect } from "react"

export function Weather() {
    async function search (city) {
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_APP_ID}`
            const res = await fetch(url)
            const data = await res.json()
            console.log(data)
        } catch (err) {
           console.log(err)
        }
    }

    useEffect(() => {
        search("Barcelona")
    }, [])

    //return ()
}