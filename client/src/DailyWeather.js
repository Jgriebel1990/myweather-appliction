import React from 'react';
import PropTypes from 'prop-types';
import { convertTimestamp } from './utilities';
import images from './images';
const DailyWeather = props => {
    return(
        <div className='d-inline-block align-items-start'>
            <ul className='weather-box list-style bg-clr-li'>
                <li>{convertTimestamp(props.time)}</li>
                <li><img src={images(props.icon)} alt={props.icon}/></li>
                <li>Hi: {props.temperatureHigh}&deg;F</li>
                <li>Lo: {props.temperatureLow}&deg;F</li>
                <li>Humidity: {props.humidity}</li>
                <li>uvIndex: {props.uvIndex}</li>
            </ul>
        </div>
    )
}

DailyWeather.propTypes = {
    time: PropTypes.number.isRequired,
    summary: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    temperatureHigh: PropTypes.number.isRequired,
    temperatureLow: PropTypes.number.isRequired,
    humidity: PropTypes.number.isRequired,
    uvIndex: PropTypes.number.isRequired
}

export default DailyWeather;