import React from 'react';
import PropTypes from 'prop-types';
import { convertTimestamp } from './utilities';
import images from './images';
const DailyWeather = props => {
    return(
        <div>
            <ul className='border list-style'>
                <li>Date: {convertTimestamp(props.time)}</li>
                <li>Summary: {props.summary}</li>
                <li>Icon: <svg src={images(props.icon)} alt={props.icon}/></li>
                <li>Daily Hi: {props.temperatureHigh}</li>
                <li>Daily Low: {props.temperatureLow}</li>
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