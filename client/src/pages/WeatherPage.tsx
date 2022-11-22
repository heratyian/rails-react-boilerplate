import React from 'react';
import { WeatherIndex, WeatherQuery } from '../api/v1/definitions/Weather';

import WeatherApi from '../api/v1/Weather';

interface S {
  weatherQuery: WeatherQuery;
  response: WeatherIndex | null;
}

class WeatherPage extends React.Component<{}, S> {

  constructor(p: {}) {
    super(p);

    this.state = {
      weatherQuery: {
        location: '',
      },
      response: null,
    };
  }

  onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(this.state);

    const response = await WeatherApi.index(this.state.weatherQuery);
    // todo - push response to redux history
    this.setState({ response });
  }

  renderWeather() {
    const { response } = this.state;
    const { currentWeather } = response || {};
    const weather = currentWeather?.weather[0]?.main;
    const temp = currentWeather?.main?.temp;
    const name = currentWeather?.name;

    return weather && (
      <p>Current weather in {name}: {weather} and {temp} degress celsius</p>
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
        {this.renderWeather()}
      </div>
    );
  }
}

export default WeatherPage;
