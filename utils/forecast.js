const request = require('postman-request');


const forecast = (longitude, latitude, callback) => {

    const url = `https://api.weatherstack.com/current?access_key=7f251e1d9f80b3522d0c91756570371a&query=${longitude},${latitude}`;

    request({ url: url, json: true }, (error, res) => {

        if (error) {
            callback('Unable to connect to weather services!', undefined)
        } else if (res.body.error) {
            callback("Unable to find the location.Please try again!", undefined);
        } else {
            const data = res.body;
            
            callback(undefined, `${data.current.weather_descriptions[0]},It is currently ${data.current.temperature} degrees out. It feels like ${data.current.feelslike} degrees out.`)
        }
    });
}

module.exports = forecast;