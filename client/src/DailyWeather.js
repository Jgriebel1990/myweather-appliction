import React from 'react';
import PropTypes from 'prop-types';

const DailyWeather = props => {
    return(
        <div>
            <ul>
                <li>Time: {props.time}</li>
                <li>Summary: {props.summary}</li>
                <li>Icon: {props.icon}</li>
                <li>Temperature {props.temperature}</li>
                <li>Humidity: {props.humidity}</li>
                <li>uvIndex: {props.uvIndex}</li>
            </ul>
        </div>
    )
}

export default DailyWeather;