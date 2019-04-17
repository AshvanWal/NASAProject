const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const api_call1 = require('./public/api_call_1.js');
// const api_call2 = require('./public/api_call_2.js');
const  port = process.env.PORT || 3000;

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

app.post('/picture', urlencodedParser, async (request, response) => {
    // console.log(request.body.country_input);
    try {
        let imageOut = await api_call1.get_image(request.body.keyword_input);
        // console.log(imageOut);
        response.render('page1.hbs', {
            output: imageOut[0],
            output2: imageOut[1],
            output3: imageOut[2],
            output4: imageOut[3]
        });

    }catch (e) {
        response.render('page1.hbs', {
            output: e
        });
    }

});


app.get('/cards', (request, response) => {
    response.render('form2.hbs', {
        title: 'Welcome Page',
        page1: ["/page1" , "/page2"]
    });
});

// app.post('/cards/deck', urlencodedParser, async (request, response) => {
//     // console.log(request.body.country_input);
//     try {
//         let imageOut = await api_call1.get_image(request.body.keyword_input);
//         // console.log(imageOut);
//         response.render('page2.hbs', {
//             output: imageOut[0],
//             output2: imageOut[1],
//             output3: imageOut[2],
//             output4: imageOut[3]
//         });
//
//     }catch (e) {
//         response.render('page1.hbs', {
//             output: e
//         });
//     }
//
// });
//






app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});