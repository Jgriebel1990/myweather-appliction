import axios from 'axios';

export const getWeather = (latitude, longitude) => {
    const url = `/weather_forecast/${latitude}, ${longitude}`;
    return axios.get(url);
}

export const getLocation = (city, state) => {
    const url = `/location/${city}, ${state}`;
    return axios.get(url);
}