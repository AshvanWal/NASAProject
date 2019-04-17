const express = require('express');
const hbs = require('hbs');
const  port = process.env.PORT || 8080;

var app = express();
app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});

app.get('/', (request, response) => {
    response.render('home.hbs', {
        title: 'Welcome Page',
        page1: ["/page1" , "/page2"]
    });
});


// app.get('/page1', (request, response))

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});