import React, { useState } from 'react'
import Searchbox from './Searchbox'
import InfoBox from './InfoBox'

const WeatherApp = () => {
    const [weatherinfo, setWeatherinfo] = useState(
        {
            city: "Delhi",
            feels_like: 24.84,
            temp: 25.07,
            tempMin: 25.05,
            tempMax: 25.05,
            humidity: 47,
            weather: "haze"
        }
    )
    let updateInfo=(newInfo)=>{
        setWeatherinfo(newInfo)
    }
    return (
        <div style={{ textAlign: "center" }}>
            <Searchbox updateInfo={updateInfo}/>
            <InfoBox info={weatherinfo}/>
        </div>
    )
}

export default WeatherApp