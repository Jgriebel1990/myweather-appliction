import React from 'react';
import PropTypes from 'prop-types';

const DailyWeather = props => {


    return(
        <div className='col-md-3'>
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

DailyWeather.propTypes = {
    time: PropTypes.number.isRequired,
    summary: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    temperature: PropTypes.number.isRequired,
    humidity: PropTypes.number.isRequired,
    uvIndex: PropTypes.number.isRequired
}

export default DailyWeather;