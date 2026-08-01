const request = require('postman-request');

const geocode = (address, callback) => {

    const url = `ADD API LATER`;

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (response.body.features.length === 0) {
            callback("Unable to find the location.Please try another search!", undefined);
        } else {

            const data = response.body;

            const obj = {
                longitude: data.features[0].properties.coordinates.longitude, latitude: data.features[0].properties.coordinates.latitude,
                location: data.features[0].properties.place_formatted
            }

            callback(undefined, obj)
        }
    });
}

module.exports = geocode;