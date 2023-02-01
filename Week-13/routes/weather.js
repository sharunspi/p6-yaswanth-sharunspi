var express = require("express");
var router = express.Router();
const request = require("request");

const key = "2a3f044e35e0196036304a56f7dc098e";

router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

// Api which returns weather data of multiple cities
router.post("/multiple_city", async function (req, res, next) {
  const cityCodes = req.body.cityCodes;
  const filterType = req.params.filterType;
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
      data: allResponse,
    });
  } else {
    res.json({
      message: "Please city list",
    });
  }
});

// Detailed Forecast for the next X days.
router.post("/weather-forcast", function (req, res, next) {
  const citName = req.params.cityName;
  const noOfDays = req.query.noOfDays;
  const url = `api.openweathermap.org/data/2.5/forecast/daily?q=${citName}&cnt=${noOfDays}&appid=${key}`;
  request(url, (err, response, body) => {
    if (err) {
      res.json({
        message: "Error while fetching data",
      });
    }
    const data = JSON.parse(body);
    res.json({
      data: data,
    });
  });
});

module.exports = router;
