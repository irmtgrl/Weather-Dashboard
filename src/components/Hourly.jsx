export function Hourly({ temp, name }) {
    return (
        <div className="bento centered col-start-1 col-span-2 row-start-2 row-span-2">
            <h2>{ name }</h2>
            <h1>{ temp }°C</h1>
        </div>
    )
}