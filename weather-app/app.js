console.log("Starting");

setTimeout(() => {
  console.log("2 Second Timer");
}, 2000);

setTimeout(() => {
  console.log("0 Second Timer");
}, 0);

console.log("Stopping");

const request = require("request");
const geocode = require("./utilis/geocode");
const forecast = require("./utilis/forecast");

// const url =
//   "http://api.weatherstack.com/current?access_key=cc932588b084f9314fefb0397d2c77a4&query=37.8267,-122.4233&units=f";

// request({ url: url }, (error, response) => {
//   const data = JSON.parse(response.body);
//   console.log(data, "data");
// });

//parse the json
// request({ url: url,json:true }, (error, response) => {
//   const data = response.body.current;
//   console.log(data, "data");
// });

//challenge
// request({ url: url,json:true }, (error, response) => {
//   const data = response.body.current;
//   console.log(data, "data");
//   console.log(`It is currently ${data.temperature} degress out. It feels like ${data.humidity} degrees out`)
// });

//Error handling
// request({ url: url, json: true }, (error, response) => {
//   if (error) {
//     console.log("Unable to connect to weather services!");
//   } else if (response.body.error) {
//     console.log("Unable to find location");
//   } else {
//     console.log(
//       `It is currently ${response.body.current.temperature} degress out. It feels like ${response.body.current.humidity} degrees out`
//     );
//   }
// });

// geocode("Philadelphia", (error, data) => {
//   console.log("Error", error);
//   console.log("data", data);
// });

//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

// forecast(37.8267, -122.4233, (error, data) => {
//   console.log("Error", error);
//   console.log("Data", data);
// });

//callback chaining

// const address = process.argv[2];

// if (!address) {
//   console.log("Please Provide an address");
// } else {
//   geocode(address, (error, data) => {
//     if (error) {
//       return console.log(error);
//     } else {
//       forecast(data.longitude, data.latitude, (error, forecastData) => {
//         if (error) {
//           return console.log(error);
//         }
//         console.log(data.location);
//         console.log(forecastData);
//       });
//     }
//   });
// }

//destructuring of object

const address = process.argv[2];

if (!address) {
  console.log("Please Provide an address");
} else {
  geocode(address, (error, { longitude, latitude, location } = {}) => {
    if (error) {
      return console.log(error);
    } else {
      forecast(longitude, latitude, (error, forecastData) => {
        if (error) {
          return console.log(error);
        }
        console.log(location);
        console.log(forecastData);
      });
    }
  });
}
