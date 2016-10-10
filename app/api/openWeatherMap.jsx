var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?';
const API_KEY = '493ce6b111d9853de72e355eafdfe368';

var units = 'units=metric';

module.exports = {
    getTemp:  function(location) {
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&appid=${API_KEY}&${units}&q=${encodedLocation}`;

        return axios.get(requestUrl).then(function(res) {
            if(res.data.cod && res.data.message) {
                throw new Error(res.data.message);
            } else {
                return res.data.main.temp;
            }
        }).catch(function(err) {
            throw new Error(err.message);
        });
    }
}
