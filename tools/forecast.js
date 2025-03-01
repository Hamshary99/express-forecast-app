const axios = require('axios');

const forecast = (latitude, longitude, callback) => {

    const url = "https://api.weatherapi.com/v1/current.json?key=7f97e74ef23b418c97a155211230503&q=" + latitude + "," + longitude;

    axios.get(url)
        .then(function (response) {
            // handle success
            var emoji;
            if (response.data.current.temp_c > 28) {
                emoji = "🔥🥵"
            } else if (response.data.current.temp_c > 13) {
                emoji = "😌"
            } else {
                emoji = "🥶☃️"
            }
            // callback(undefined, "It is " + response.data.current.condition.text + " in "
            //     + response.data.location.name + " and it's " + response.data.current.temp_c + " degrees celsius!" + emoji);
            callback(undefined, {
                location: response.data.location.name,
                temperature: response.data.current.temp_c,
                feelsLike: response.data.current.feelslike_c,
                humidity: response.data.current.humidity,
                windSpeed: response.data.current.wind_kph,
                condition: response.data.current.condition.text,
                emoji: emoji
            });
        })
        .catch(function (error) {
            // handle error
            if (error.response) {
                //console.log(error.response);
                if (error.response.statusText == "Forbidden" || error.response.status == 403) {
                    callback("Forbidden API Key", undefined);
                } else if (error.response.status == 404) {
                    callback("Can't find the location", undefined);
                }
            } else {
                callback("Can't access the API", undefined);
            }
        })
        .finally(function () {
            // always executed
        });

}

//exports.forecast = forecast;
module.exports = forecast;