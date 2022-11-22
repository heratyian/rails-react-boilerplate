class Api::V1::MovieController < ApplicationController
  def index
    movie = MovieApi.new
    movie.search_movies(params[:query])
    render json: movie.movie_search_results
  end
end
