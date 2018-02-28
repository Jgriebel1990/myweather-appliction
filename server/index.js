const express = require("express");
const axios = require("axios");

require("dotenv").config();
const { DARKSKY_API } = process.env;
const { MAPS_API} = process.env;

const serverApp = express();
const port = process.env.PORT || 5000;

serverApp.get("/weather_forecast/:lat,:lon", function(request, response) {
  const { lat, lon } = request.params;
  const url = `https://api.darksky.net/forecast/${DARKSKY_API}/${lat},${lon}`;
  axios
    .get(url)
    .then(res => {
      response.status(200).json(res.data);
    })
    .catch(err => {
      response.status(500).json({
        msg: "you suck"
      });
    });
});

serverApp.get("/location/:city,:state", function(request, response) {
  const { city, state } = request.params;
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${city},${state}&key=${MAPS_API}`;
  axios
    .get(url)
    .then(res => {
      response.status(200).json(res.data);
    })
    .catch(err => {
      console.log("FOIL", err);
      response.status(500).json({
        msg: "fail"
      });
    });
});

serverApp.listen(port, () => {
  console.log(`Now listening on port ${port}`);
});
