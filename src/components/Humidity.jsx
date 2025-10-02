export function Humidity({ humidity }) {
    return (
        <div className="bento centered col-start-3 col-span-1 row-start-3 row-span-1">
            <h1>{ humidity }%</h1>
        </div>
    )
}