class Api::V1::MovieController < ApplicationController
  def index
    movie = MovieApi.new
    movie.search_movies(params[:query])
    render json: movie, serializer: Api::V1::Movie::IndexSerializer
  end
end
