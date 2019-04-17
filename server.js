const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const api_call1 = require('./public/api_call_1.js');
// const api_call2 = require('./public/api_call_2.js');
const  port = process.env.PORT || 8080;

var app = express();
var urlencodedParser = bodyParser.urlencoded({extended: false});

app.use(bodyParser.json());
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));


hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});

app.get('/', (request, response) => {
    response.render('form1.hbs', {
        title: 'Welcome Page',
        page1: ["/page1" , "/page2"]
    });
});

app.post('/weather', urlencodedParser, async (request, response) => {
    // console.log(request.body.country_input);
    try {
        let weatherOut = await api_call1.get_weather(request.body.country_input);
        // console.log(weatherOut);
        response.render('page1.hbs', {
            output: weatherOut.main
        });

    }catch (e) {
        response.render('page1.hbs', {
            output: e
        });
    }

});
//
// app.get('/image', urlencodedParser, async (request, response) => {
//     // console.log(request.body.country_input);
//     try {
//         let image = await api_call1.get_image(request.output);
//         // console.log(weatherOut);
//         response.render('page2.hbs', {
//             output: image.main
//         });
//
//     }catch (e) {
//         response.render('page2.hbs', {
//             output: e
//         });
//     }
//
// });


// app.get('/page1', (request, response))

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});