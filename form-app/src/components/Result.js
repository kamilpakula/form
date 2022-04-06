import React from "react";

const Result = (props) => {
    const { date, city, sunrise, sunset, temperature, pressure, wind, err } =
        props.weather;
    let content = null;
    const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
    const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();
    const cityUp = city.toUpperCase();
    if (!err && city) {
        content = (
            <div>
                <h1>
                    pogoda dla: <strong>{cityUp}</strong>
                </h1>
                <p>
                    data: <strong>{date}</strong>
                </p>
                <p>
                    temperatura: <strong>{temperature} &#176;C</strong>
                </p>
                <p>
                    wschód słońca: <strong>{sunriseTime}</strong>
                </p>
                <p>
                    zachód słońca: <strong>{sunsetTime}</strong>
                </p>
                <p>
                    ciśnienie: <strong>{pressure} hPa</strong>
                </p>
                <p>
                    prędkość wiatru: <strong>{wind} m/s</strong>
                </p>
            </div>
        );
    }
    return (
        <div className="Result">
            {err ? `brak danych w bazie ${city}` : content}
        </div>
    );
};

export default Result;
