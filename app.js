const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const address = process.argv[2];
if (!address) {
    console.log("Please provide an address")
} else {
    geocode(address, (error, data) => {
        if (error) {
            return console.log("Error", error);
        }
        //console.log("data ", data);

        const { longitude, latitude, location } = data;

        forecast(longitude, latitude, (error, forecastData) => {
            if (error) {
                return console.log("Error", error);
            }
            console.log("Location: ", location)
            console.log("Weather: ", forecastData)
        });
    });
}

