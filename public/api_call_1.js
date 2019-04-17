const axios = require('axios');


var get_image = (keyword) => {
    return new Promise(async (resolve, reject) => {
        try {
            const images = await axios.get(`https://images-api.nasa.gov/search?q=`+ keyword);


            // const weather = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat_lng.lat}&lon=${lat_lng.lng}${key1}`);
            // console.log(JSON.stringify(weather.data.weather[0]));
            // resolve(images.data.collection.items[1].links[0].href)
            resolve([images.data.collection.items[7].links[0].href, images.data.collection.items[3].links[0].href, images.data.collection.items[4].links[0].href, images.data.collection.items[6].links[0].href])
            // resolve(images.data.collection.items[4].links[0].href)

        } catch (e) {

            reject(e);
        }
    })
};



module.exports = {
    get_image
};


// get_image('rock').then((result) => {
//     console.log(result);
// }).catch((error) =>{
//     console.log(error);
// });
