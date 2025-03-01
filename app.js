const express = require('express');
const app = express();
const port = 3000;

const path = require('path');
const publicDirectoryPath = path.join(__dirname, './public'); 
app.use(express.static(publicDirectoryPath));

const hbs = require('hbs');
app.set('view engine', 'hbs');
const viewsPath = path.join(__dirname, './template/views');
app.set('views', viewsPath);



const partialsPath = path.join(__dirname, './template/partials');
hbs.registerPartials(partialsPath);

app.get ('/' , (req,res) => {
    res.render('index' , {
        title : "Weather App",
    })
})

const geocode = require('./tools/geocode');
const forecast = require('./tools/forecast');

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'You must provide an address'
        })
    }

    geocode(req.query.address, (error, { latitude, longitude} = {}) => {
        if (error) {
            return res.send({ error })
        }

        forecast(latitude, longitude, (error, forecastData) => {
            console.log(forecastData)
            if (error) {
                return res.send({ error })
            }

            res.send({
                location: req.query.address,
                coordinates: { latitude, longitude },
                temperature: forecastData.temperature,
                feelsLike: forecastData.feelsLike,
                humidity: forecastData.humidity,
                windSpeed: forecastData.windSpeed,
                condition: forecastData.condition
            })
        })
    })
});

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});