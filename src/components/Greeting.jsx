export function Greeting() {
    const time = new Date().getTime()
    let greeting;
    switch (time) {
        case time < 4: greeting = "Good Night"; break
        case time < 12: greeting = "Good Morning"; break
        case time < 18: greeting = "Good Afternoon"; break
        case time < 22: greeting = "Good Evening"; break
        default: greeting = "Good Night"
    }

    return (
        <div className="bento flex flex-col row-start-1 row-span-1 col-start-1 col-span-3">
            <h2>{greeting}</h2>
            <p>Looks like it’s going to be windy today, don’t forget to take your jacket.</p>
        </div>
    )
}