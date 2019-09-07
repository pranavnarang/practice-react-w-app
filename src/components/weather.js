import React from "react"

const Weather = props => (
    <div class="weather__information">
        {props.city && props.country && <p> <span class="weather__key">Location:</span> {props.city}, {props.country}</p>}
        {props.temperature && <p><span class="weather__key">Temperature:</span> {props.temperature}</p>}
        {props.humidity && <p><span class="weather__key">Humidity:</span> {props.humidity}</p>}
        {props.description && <p><span class="weather__key">Description:</span> {props.description}</p>}
        {props.error && <p>{props.error}</p>}
    </div>
)

export default Weather;