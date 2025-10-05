import outdoors from "../assets/outdoors.svg";

export function Activity({ temperature, wind }) {
    let recommendation;
    switch (temperature, wind) {
        case (temperature >= 20 && wind < 10):
            recommendation = "Highly Recommended";
            break;
        case (temperature >= 10 && temperature < 20 && wind < 15):
            recommendation = "Recommended";
            break;
        case (temperature < 10 || wind >= 15):
            recommendation = "Not Recommended";
            break;
        default:
            recommendation = "Not Recommended";
    }

    return (
        <div className="bento centered col-start-3 col-span-1 row-start-2 row-span-1">
            <h2>Outdoors</h2>
            <img className="my-2 w-6" src={ outdoors } />
            <p className="text-center leading-4">{ recommendation }</p>
        </div>
    )
}