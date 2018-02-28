import React, { Component } from "react";
import "./App.css";
import { getWeather } from "./service/weather";
import { isEmptyObject } from './utilities';
import DailyWeather from './DailyWeather'

class App extends Component {
  constructor() {
    super();
    this.state = {
      lat: 0,
      lon: 0,
      dailyWeather: {},
      city: '',
      states: '',
      error: null
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
    getCity(this.state.city, this.state.states)
    
  }
  render() {
    return (
      <div>
        <h1 className='h1-style'>Whats the Weather?</h1>
        <header className='head-style'>
          Enter the latitude and longitude to find the current weather!
        </header>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label className='lat'>
            <h4>Latitude</h4>
            <input
              className='col-lg-3 lat'
              type="numbers"
              placeholder="Latitude"
              min="-90"
              max="90"
              onChange={e => this.handleLatChange(e)}
              value={this.state.lat}
              required
            />
          </label>
          <label className='lat'>
            <h4>Longitude</h4>
            <input
              className='col-lg-3'
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
        {this.state.error ? <h1>{this.state.error}</h1> : ''}
        { isEmptyObject(this.state.dailyWeather) ? 
          "" :
          this.state.dailyWeather.data.map((day, index) => <DailyWeather key={index}
                                                                        {...day} />)}
      </div>
    );
  }
}

export default App;
