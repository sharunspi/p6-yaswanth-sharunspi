var express = require("express");
var router = express.Router();
const request = require("request");

const key = "2a3f044e35e0196036304a56f7dc098e";

router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

// Api which returns weather data of multiple cities
router.post("/weather-mutiple-cities", async function (req, res, next) {
  try {
    const cityCodes = req.body.cityCodes;
    const filterType = req.params.filterType;
    const limit = req.params.limit;
    let error = false;
    let allResponse = [];
    let cityCode = "",
      cityName = "";
    if (cityCodes.length > 0) {
      await cityCodes.forEach(async (element) => {
        if (filterType === "cityName") {
          cityName = element;
        } else {
          cityCode = element;
        }
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName},${cityCode}&appid=${key}`;
        await request(url, (err, response, body) => {
          if (err) {
            error = err;
            console.log(err);
          }
          let data = JSON.parse(body);
          console.log({ data });
          allResponse.push(data);
        });
      });
      res.json({
        data: allResponse.slice(0, limit),
        message: "Weather details of multiple cities",
        status: 200,
        error: false,
      });
    } else {
      res.json({
        message: "Please add minimum one city",
        error: false,
        data: [],
        status: 200,
      });
    }
  } catch (err) {
    console.log(err);
    res.json({
      message: error.message,
      error: true,
      data: [],
      status: 500,
    });
  }
});

// Detailed Forecast for the next X days.
router.post("/weather-forecast", function (req, res, next) {
  try {
    const citName = req.params.cityCode;
    const noOfDays = req.query.noOfDays;
    const url = `api.openweathermap.org/data/2.5/forecast/daily?q=${citName}&cnt=${noOfDays}&appid=${key}`;
    request(url, (err, response, body) => {
      if (err) {
        res.json({
          message: "Error while fetching data",
          error: err,
          data: [],
          status: 200,
        });
      }
      const data = JSON.parse(body);
      res.json({
        data: data,
        message: `Weather forcast for ${noOfDays}`,
        error: false,
        status: 200,
      });
    });
  } catch (error) {
    res.json({
      data: [],
      message: error.message,
      error: true,
      status: 500,
    });
  }
});

// Filter the data by any particular city, any particular date , any particular moment
router.post("/weather-data-by-city", function (req, res, next) {
  try {
    const cityName = req.params.cityCode;
    const date = req.query.date;
    const time = req.query.time;

    const urlGposition = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${key}`;

    new Promise((resolve, reject) => {
      request(urlGposition, (err, response, body) => {
        if (err) {
          reject(err);
        }
        const data = JSON.parse(body);
        resolve(dat);
      });
    })
      .then((res) => {
        const lat = res.data[0].lat;
        const long = res.data[0].lon;
        const date = new Date(`${date} ${time}`);
        const url = `https://history.openweathermap.org/data/3.0/history/timemachine?lat=${lat}&lon=${long}&dt=${date}&appid=${key}`;

        request(url, (err, response, body) => {
          if (err) {
            res.json({
              data: [],
              message: err.message,
              error: true,
              status: 500,
            });
          }
          const data = JSON.parse(body);
          res.json({
            data: data,
            message: "City data at particular time",
            error: false,
            status: 200,
          });
        });
      })
      .catch((err) => {
        res.json({
          data: [],
          message: err.message,
          error: true,
          status: 500,
        });
      });
  } catch (error) {
    res.json({
      data: [],
      message: error.message,
      error: true,
      status: 500,
    });
  }
});

// Current weather conditions of any particular city
router.post("/weather-data-by-city", function (req, res, next) {
  try {
    const cityName = req.params.cityCode;

    const url = `api.openweathermap.org/data/2.5/forecast/daily?q=${cityName}&appid=${key}`;
    request(url, (err, response, body) => {
      if (err) {
        res.json({
          message: "Error while fetching data",
          error: err,
          data: [],
          status: 200,
        });
      }
      const data = JSON.parse(body);
      res.json({
        data: data,
        message: `Weather of ${cityName}`,
        error: false,
        status: 200,
      });
    });
  } catch (error) {
    res.json({
      data: [],
      message: error.message,
      error: true,
      status: 500,
    });
  }
});

module.exports = router;
