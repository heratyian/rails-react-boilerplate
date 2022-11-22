class Api::V1::MovieController < ApplicationController
  def index
    movie = MovieApi.new
    movie.search_movies(params[:query])
    # TODO: use serializer for model instead of hash
    render json: movie.movie_search_results
  end
end
