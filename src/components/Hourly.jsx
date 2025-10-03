export function Hourly({ temp, name, country, description, icon }) {
    return (
        <div className="bento centered col-start-1 col-span-2 row-start-2 row-span-2">
            <h2>{ name }, { country }</h2>
            <img src={`https://openweathermap.org/img/wn/${ icon }@2x.png`}/>
            <h1>{ temp }°C</h1>
            <p>{ description.toUpperCase() }</p>
        </div>
    )
}