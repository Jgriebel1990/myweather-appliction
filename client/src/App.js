import React, { Component } from "react";
import "./App.css";
import { getWeather } from "./service/weather";
import { getLocation } from "./service/weather";
import { isEmptyObject } from "./utilities";
import DailyWeather from "./DailyWeather";

class App extends Component {
  constructor() {
    super();
    this.state = {
      lat: "",
      lon: "",
      dailyWeather: {},
      city: "",
      error: null,
      state: ""
    };
    this.handleLatChange = this.handleLatChange.bind(this);
    this.handleLonChange = this.handleLonChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCityChange = this.handleCityChange.bind(this);
    this.handleStateChange = this.handleStateChange.bind(this);
  }
  handleLatChange(e) {
    this.setState({
      lat: +e.target.value
    });
  }
  handleLonChange(e) {
    this.setState({
      lon: +e.target.value
    });
  }
  handleCityChange(e) {
    this.setState({
      city: e.target.value
    });
  }
  handleStateChange(e) {
    this.setState({
      city: e.target.value
    });
  }
  handleSubmit(e) {
    if (e) {
      e.preventDefault();
    }

    getWeather(this.state.lat, this.state.lon)
      .then(response => {
        const dailyWeather = response.data.daily;
        this.setState({
          dailyWeather: dailyWeather
        });
      })
      .catch(err => {
        console.error(err);
        this.setState({
          msg: "error"
        });
      });
  }
  getCity(e) {
    e.preventDefault();
    getLocation(this.state.city, this.state.state)
      .then(response => {
        const lat = response.data.results[0].geometry.location.lat;
        const lon = response.data.results[0].geometry.location.lng;
        this.setState({
          lat: lat,
          lon: lon
        });
        this.handleSubmit();
      })
      .catch(err => {
        this.setState({
          msg: "error"
        });
      });
  }

  render() {
    return (
      <div>
        <h1 className="h1-style">Global Weather</h1>
        <form onSubmit={e => this.getCity(e)} className="form-mrg">
          <div>
            <label>
              <input
                type="text"
                className="loc-mrg"
                placeholder="City, State"
                onChange={e => this.handleCityChange(e)}
                value={this.state.city}
                required
              />
            </label>
          </div>
          <div>
            <button
              type="submit"
              className="btn-lg btn-primary submit-btn"
            >
              Get Weather
            </button>
          </div>
        </form>
        {this.state.error ? <h1>{this.state.error}</h1> : ""}
        {isEmptyObject(this.state.dailyWeather)
          ? ""
          : this.state.dailyWeather.data.map((day, index) => (
              <DailyWeather key={index} {...day} />
            ))}
        {JSON.stringify(this.state.DailyWeather)}
      </div>
    );
  }
}

export default App;
