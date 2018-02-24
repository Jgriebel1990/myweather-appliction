import axios from 'axios';

export const getWeather = (latitude, longitude) => {
    const url = `/weather_forecast/${latitude}, ${longitude}`;
    return axios.get(url);
}