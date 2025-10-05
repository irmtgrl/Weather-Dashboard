export function Weather({ temp, description, icon }) {
    const date = new Date()
    const getDay = {
        0: "Sunday",
        1: "Monday",
        2: "Tuesday",
        3: "Wednesday", 
        4: "Thursday",
        5: "Friday",
        6: "Saturday",
    }

    const fixedDate = (add = 0) => {
        if(date.getDay() > 5) {
            return getDay[date.getDay() - 7 + add]
        }
        return getDay[date.getDay() + add]
    }

    return (
        <div className="bento flex flex-col justify-center items-center col-start-4 col-span-2 row-start-1 row-span-3">
            <div className="w-full flex items-center justify-start gap-1">
                <img src={`https://openweathermap.org/img/wn/${ icon }.png`}/>
                <h2 className="mr-auto">{ fixedDate(0) }</h2>
                <p>{ description }</p>
                <h2>{ temp }°C</h2>
            </div>
            <div className="w-full flex items-center justify-start gap-1">
                <img src={`https://openweathermap.org/img/wn/${ icon }.png`}/>
                <h2 className="mr-auto">{ fixedDate(1) }</h2>
                <p>{ description }</p>
                <h2>{ temp }°C</h2>
            </div>
            <div className="w-full flex items-center justify-start gap-1">
                <img src={`https://openweathermap.org/img/wn/${ icon }.png`}/>
                <h2 className="mr-auto">{ fixedDate(2) }</h2>
                <p>{ description }</p>
                <h2>{ temp }°C</h2>
            </div>
            <div className="w-full flex items-center justify-start gap-1">
                <img src={`https://openweathermap.org/img/wn/${ icon }.png`}/>
                <h2 className="mr-auto">{ fixedDate(3) }</h2>
                <p>{ description }</p>
                <h2>{ temp }°C</h2>
            </div>
            <div className="w-full flex items-center justify-start gap-1">
                <img src={`https://openweathermap.org/img/wn/${ icon }.png`}/>
                <h2 className="mr-auto">{ fixedDate(4) }</h2>
                <p>{ description }</p>
                <h2>{ temp }°C</h2>
            </div>
        </div>
    )
}