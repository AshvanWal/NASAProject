const axios = require('axios');
const key1 = '&units=metric&appid=da2f1a435b9877ed3f01c4a0409b5b42';
const key2 = '&key=AIzaSyBLWacn6lKrsSQWnJtM2mOsu-fJtxJQtOE';
// const json = require('json')


var get_photo = (keyword) => {
    return new Promise(async (resolve, reject) => {
        try {
            const address = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${city}${key2}`);
            let lat_lng = address.data.results[0].geometry.location;
            const weather = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat_lng.lat}&lon=${lat_lng.lng}${key1}`);
            console.log(JSON.stringify(weather.data.weather[0]));
            resolve(weather.data.weather[0])
        } catch (e) {

            reject(e);
        }
    })
};

module.exports = {
    get_photo
};