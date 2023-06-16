const path = require("path");
const express = require("express");
const hbs = require("hbs");
const geocode = require("../../web-server/src/utilis/geocode");
const forecast = require("../../web-server/src/utilis/forecast");

console.log(__dirname, "DIR_PATH");
console.log(__filename);
console.log("test console");

//Online paths for Express config
const publicDirectoryPath = path.join(__dirname, "../public");
console.log(publicDirectoryPath, "publicDirectoryPath");
const viewPath = path.join(__dirname, "./templates/views");
console.log(viewPath, "viewPath");
const partialPath = path.join(__dirname, "./templates/partials");
console.log(partialPath, "partialPath");
// console.log(publicDirectoryPath);
//to store express in one variable to access the property
const app = express();
// console.log(publicDirectoryPath, "publicDirectoryPath");
//setup static directory to server
app.use(express.static(publicDirectoryPath));

app.set("view engine", "hbs");
app.set("views", viewPath);
hbs.registerPartials(partialPath);

// app.get("", (req, res) => {
//   res.send("Hello Express");
// });

// app.get("/help", (req, res) => {
//   res.send("Help Page");
// });

// app.get("/about", (req, res) => {
//   res.send("About Page");
// });

// app.get("/weather", (req, res) => {
//   res.send("Weather Page");
// });

//send html as response
// app.get("/weatherInfo", (req, res) => {
//   res.send(`<h1>Weather</h1>`);
// });

//send json as response
// app.get("/userInfo", (req, res) => {
//   res.send({
//     name: "Jaymeen",
//     age: 26,
//   });
// });

// app.get("/usersInfo", (req, res) => {
//   res.send([
//     {
//       name: "Jaymeen",
//       age: 26,
//     },
//     {
//       name: "Jaymeen",
//       age: 26,
//     },
//   ]);
// });

// app.get("/help/*", (req,res)=> {
//   res.send('Help article not found')
// })

// app.get("*", (req, res) => {
//   // res.send('My 404 page');
//   res.render('404',{
//     title:'404',
//     name:'Andrew Mead',
//     errorMessage:'Page not found'
//   })
// });

//dynamic content
app.get("/", (req, res) => {
  res.render("index", {
    title: "Weather APP",
    name: "Andrew Mead",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Me",
    name: "Andrew Mead",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    helpText: "This is some helpful text.",
    title: "help",
    name: "Jaymeen Kotak",
  });
});

// app.get("*", (req, res) => {
//   res.render("help", {
//     helpText: "This is some helpful text.",
//     title: "help",
//     name: "Jaymeen Kotak",
//   });
// });

app.get("help/*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "Andrew Mead",
    errorMessage: "Help artical not found",
  });
});

// app.get("*", (req, res) => {
//   // res.send('My 404 page');
//   res.render("404", {
//     title: "404",
//     name: "Andrew Mead",
//     errorMessage: "Page not found",
//   });
// });

//section 8
app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: "You must provide an address",
    });
  }
  geocode(
    req.query.address,
    (error, { longitude, latitude, location } = {}) => {
      if (error) {
        return res.send({ error });
      } else {
        forecast(longitude, latitude, (error, forecastData) => {
          if (error) {
            return res.send({ error });
          }
          res.send({
            forecast: forecastData,
            location: location,
            address: req.query.address,
          });
        });
      }
    }
  );
});

app.get("/products", (req, res) => {
  console.log(req.query, "query");
  if (!req.query.search) {
    return res.send({
      error: "You must provide a search term",
    });
  }
  res.send({
    products: [],
  });
});

//to start server
app.listen(3000, () => {
  console.log(`Server is up on port 3000`);
});
