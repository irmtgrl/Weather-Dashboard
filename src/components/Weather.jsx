export function Weather({ temp, description, icon }) {
    const date = new Date()
    const getDay = {
        0: "Sunday",
        1: "Monday",
        2: "Tuesday",
        3: "Wednesday", 
        4: "Thursday",
        5: "Friday",
        6: "Saturday"
    }[date.getDay()]

    return (
        <div className="bento flex flex-col justify-center items-center col-start-4 col-span-2 row-start-1 row-span-3">
            <div className="w-full flex items-center justify-start gap-1">
                <img src={`https://openweathermap.org/img/wn/${ icon }.png`}/>
                <h2 className="mr-auto">{ getDay }</h2>
                <p>{ description }</p>
                <h2>{ temp }°C</h2>
            </div>
            <div className="w-full flex items-center justify-start gap-1">
                <img src={`https://openweathermap.org/img/wn/${ icon }.png`}/>
                <h2 className="mr-auto">{ getDay }</h2>
                <p>{ description }</p>
                <h2>{ temp }°C</h2>
            </div>
            
        </div>
    )
}