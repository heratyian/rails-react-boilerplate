import React from 'react';
import { MovieIndex, MovieQueryParams } from '../api/v1/definitions/Movie';
import MovieApi from '../api/v1/Movie';

interface S {
  movieQueryParams: MovieQueryParams
  results: MovieIndex[];
}

export default class MoviePage extends React.Component<{}, S> {

  constructor(p: {}) {
    super(p);

    this.state = {
      movieQueryParams: {
        query: '',
      },
      results: [],
    }
  }

  onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(this.state);
    const { movieQueryParams } = this.state;
    const results = await MovieApi.search(movieQueryParams);

    this.setState({ results });
  }

  renderSearchInputForm() {
    const { movieQueryParams } = this.state; 
    return (
      <form onSubmit={this.onSubmit}>
        <div className='input-group'>
          <input
            id="movie-search-input"
            name="query"
            value={movieQueryParams?.query}
            onChange={(e) => this.setState({ movieQueryParams: { ...movieQueryParams, query: e.currentTarget.value }})}
          />
          <button
            className='btn btn-outline-secondary'
            type="submit"
          >
            Search
          </button>
        </div>

      </form>
    )
  }

  renderMovies() {
    return (
      <div>
        {this.state.results.map(m => (
          <div>
            <h5>{m?.title}</h5>
          </div>
        ))}
      </div>
    )
  }

  render() {
    return (
      <div className="container">
        <h1>Movie Page</h1>
        {this.renderSearchInputForm()}
        {this.renderMovies()}
      </div>
    );
  }
}
