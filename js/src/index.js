import {getCurrentLocation} from './locationServices';
import {weatherByLocation} from './api/weather';
import {searchByQuery} from './api/giphy';
import {renderWeather} from './dom';




function screenLoad() {
    setTimeout( () => {
        document.body.classList.add("loaded");
        // $('h1').css('color','#222222');
    }, 1500);
};

getCurrentLocation()
    .then(results => {
        const {latitude, longitude} = results.coords;
        localStorage.setItem('savedCoords', JSON.stringify({latitude, longitude}));

        return weatherByLocation(latitude, longitude);
    })
    .then((weatherData) => {
        // const {name, weather} = weatherData;
        console.log(weatherData);
        // const {description} = weather[0];
        screenLoad()
        return renderWeather(weatherData);
    // })
    // .then((giphyData) => {
    //     console.log(giphyData)
    })
    .catch(e => {
        document.querySelector('#app').innerHTML = `<h1>${e}</h1>`;
    });




