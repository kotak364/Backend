const request = require("request");
//forecast 1

// const forecast = (latitude, longitude, callback) => {
//   const url = `http://api.weatherstack.com/current?access_key=cc932588b084f9314fefb0397d2c77a4&query=${latitude},${longitude}&units=f`;

//   request({ url: url, json: true }, (error, {body}) => {
//     if (error) {
//       callback("Unable to connect to weather services!", undefined);
//     } else if (response.body.error) {
//       console.log("Unable to find location");
//     } else {
//       callback(undefined, {
//         temperature: response.body.current.temperature,
//         humidity: response.body.current.humidity,
//       });
//     }
//   });
// };

//forecast 2
//forecast with destructuring

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=cc932588b084f9314fefb0397d2c77a4&query=${latitude},${longitude}&units=f`;

  request({ url: url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather services!", undefined);
    } else if (body.error) {
      console.log("Unable to find location");
    } else {
      callback(undefined, {
        temperature: body.current.temperature,
        humidity: body.current.humidity,
      });
    }
  });
};

module.exports = forecast;
