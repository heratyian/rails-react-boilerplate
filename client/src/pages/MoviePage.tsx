import React from 'react';
import { MovieIndex, MovieQueryParams } from '../api/v1/definitions/Movie';
import MovieApi from '../api/v1/Movie';

interface S {
  movieQueryParams: MovieQueryParams
  response: MovieIndex | null;
}

export default class MoviePage extends React.Component<{}, S> {

  constructor(p: {}) {
    super(p);

    this.state = {
      movieQueryParams: {
        query: '',
      },
      response: null,
    }
  }

  onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { movieQueryParams } = this.state;
    const response = await MovieApi.search(movieQueryParams);

    this.setState({ response });
  }

  renderSearchInputForm() {
    const { movieQueryParams } = this.state; 
    return (
      <form onSubmit={this.onSubmit}>
        <div className='input-group'>
          <input
            id="movie-search-input"
            name="query"
            required
            autoFocus
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
    const { response } = this.state;
    return response && (
      <div>
        {response.results.map(m => {
          const { id, title, posterUrl } = m;
          return(
            <div key={id}>
              <h5>{title}</h5>
              <img
                src={posterUrl || "//www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"}
                style={{ maxWidth: 200 }}
                alt="movie poster"
              />
            </div>
          )
        })}
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
