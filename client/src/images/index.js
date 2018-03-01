import cloudyDay from './cloudy-day-3.svg';
// import cloudyNight from './cloudy-night-3.svg';
// import cloudy from './cloudy.svg';
import day from './day.svg';
// import night from './night.svg';
// import rainy1 from './rainy-3.svg';
// import rainy2 from './rainy-6.svg';
// import rainy3 from './rainy-7.svg';
// import snowy from './snowy-3.svg';
// import snowy2 from './snowy-6.svg';
// import thunder from './thunder.svg';
// import sagittarius from './weather_sagittarius.svg';
// import sunset from './weather_sunset.svg';
// import sprite from './weather-sprite.svg';
// import weather from './weather.svg';

const Selection = (name) => {
    switch(name){
        case 'cloudy':
            return cloudyDay
        case 'clear':
            return day
        default:
            return day
        
    }
}
export default Selection;