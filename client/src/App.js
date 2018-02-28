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
      lat: 0,
      lon: 0,
      dailyWeather: {},
      city: '',
      error: null,
      state: 'FL'
    };
    this.handleLatChange = this.handleLatChange.bind(this);
    this.handleLonChange = this.handleLonChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCityChange = this.handleCityChange.bind(this);
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
  handleSubmit(e) {
    e.preventDefault();
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
          lon: lon,
        });
        this.handleSubmit();
        
      })
      .catch(err => {
        console.log('FAIL');
        this.setState({
          msg:'error'
        });
      });

  }

  render() {
    return (
      <div>
        <h1 className="h1-style">Whats the Weather?</h1>
        <header className="head-style">
          Enter the latitude and longitude to find the current weather!
        </header>
        <form onSubmit={e => this.getCity(e)} className='container'>
          <label className="lat">
            <h4>Latitude</h4>
            <input
              className=""
              type="number"
              placeholder="Latitude"
              min="-90"
              max="90"
              onChange={e => this.handleLatChange(e)}
              value={this.state.lat}
              required
            />
          </label>
          <label className="lat">
            <h4>Longitude</h4>
            <input
              className=""
              type="number"
              placeholder="Longitude"
              min="-180"
              max="180"
              onChange={e => this.handleLonChange(e)}
              value={this.state.lon}
              required
            />
          </label>
          <label className="lat">
            <h4>Location</h4>
            <input
              type="text"
              className=""
              placeholder="Location"
              onChange={e => this.handleCityChange(e)}
              value={this.state.city}
              required
              
            />
          </label>
          <button type="submit" className="btn-primary btn-lg submit-btn">
            Get Weather
          </button>
        </form>
        {this.state.error ? <h1>{this.state.error}</h1> : ""}
        {isEmptyObject(this.state.dailyWeather)
          ? ""
          : this.state.dailyWeather.data.map((day, index) => (
              <DailyWeather key={index} {...day} />
            ))}
      </div>
    );
  }
}

export default App;
