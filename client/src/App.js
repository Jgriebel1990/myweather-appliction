import React, { Component } from "react";
import "./App.css";
import { getWeather } from "./service/weather";
import CurrentWeather from './CurrentWeather'

class App extends Component {
  constructor() {
    super();
    this.state = {
      lat: 0,
      lon: 0,
      currentWeather: {}
    };
    this.handleLatChange = this.handleLatChange.bind(this);
    this.handleLonChange = this.handleLonChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
  handleSubmit(e) {
    e.preventDefault();
    console.log("hello");
    getWeather(this.state.lat, this.state.lon)
      .then(response => {
        const currentWeather = response.data.currently;
        this.setState({
          currentWeather: currentWeather
        });
      })
      .catch(err => {
        console.error(err);
        this.setState({
          msg: "error"
        });
      });
  }
  render() {
    return (
      <div>
        <h1>Whats the Weather?</h1>
        <header>
          Enter the latitude and longitude to find the current weather!
        </header>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label>
            <h4>Latitude</h4>
            <input
              type="numbers"
              placeholder="Latitude"
              min="-90"
              max="90"
              onChange={e => this.handleLatChange(e)}
              value={this.state.lat}
              required
            />
          </label>
          <label>
            <h4>Longitude</h4>
            <input
              type="numbers"
              placeholder="Longitude"
              min="-180"
              max="180"
              onChange={e => this.handleLonChange(e)}
              value={this.state.lon}
              required
            />
          </label>
          <button type="submit" className="btn-primary btn-lg">
            Get Weather
          </button>
        </form>
        <pre>
          {JSON.stringify(this.state.currentWeather, null, 6)}
          <CurrentWeather />
        </pre>
      </div>
    );
  }
}

export default App;
