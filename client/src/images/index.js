import cloudyDay from './cloudy-day-3.svg';
import cloudyNight from './cloudy-night-3.svg';
import cloudy from './cloudy.svg';
import day from './day.svg';
import night from './night.svg';
import rainy3 from './rainy-7.svg';
import snowy2 from './snowy-6.svg';
import thunder from './thunder.svg';
import wind from './wind_svg.svg';

const Selection = (name) => {
    switch(name){
        case 'partly-cloudy-day':
            return cloudyDay
        case 'partly-cloudy-night':
            return cloudyNight
        case 'snow':
            return snowy2
        case 'clear-night':
            return night
        case 'clear-day':
            return day
        case 'rain':
            return rainy3
        case 'cloudy':
            return cloudy
        case 'thunderstorm':
            return thunder
        case 'wind':
            return wind
        
            
        
    }
}
export default Selection;