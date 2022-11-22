import React from 'react';
import { connect } from 'react-redux';

import { WeatherQuery } from '../api/v1/definitions/Weather';
import WeatherApi from '../api/v1/Weather';
import { pushWeather } from '../redux-modules/Weather'
import PageProps from './definitions/PageProps';

interface P extends PageProps {};

interface S {
  weatherQuery: WeatherQuery;
}

class WeatherPage extends React.Component<P, S> {

  constructor(p: P) {
    super(p);

    this.state = {
      weatherQuery: {
        location: '',
      },
    };
  }

  onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await WeatherApi.index(this.state.weatherQuery);
    this.props.dispatch(pushWeather(response));
  }

  renderWeathers() {
    return (
      <div className='my-3'>
        {this.props.weather.weathers.map((w, i) => {
          const { currentWeather } = w;
          const weather = currentWeather?.weather[0]?.main;
          const temp = currentWeather?.main?.temp;
          const name = currentWeather?.name;
      
          return weather && (
            <p key={i}>Current weather in {name}: {weather} and {temp} degress celsius</p>
          )})}
      </div>
    );
  }

  renderSearchForm() {
    const { weatherQuery } = this.state;
    const { location } = weatherQuery;
    return(
      <form onSubmit={this.onSubmit}>
        <div className='input-group'>
          <input
            id="location-search-input"
            name="location"
            value={location || ''}
            required
            autoFocus
            onChange={(e) => this.setState({
              weatherQuery: {
                ...weatherQuery,
                location: e.currentTarget.value
              }}
            )}
          />
          <button
            id="location-search-submit"
            className="btn btn-outline-primary"
            type="submit"
          >
            Search
          </button>
        </div>
      </form>
    );
  }

  render() {
    return (
      <div className='container'>
        <h1>Current Weather</h1>
        {this.renderSearchForm()}
        {this.renderWeathers()}
      </div>
    );
  }
}

export default connect(state => state)(WeatherPage);
