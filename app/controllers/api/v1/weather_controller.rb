class Api::V1::WeatherController < ApplicationController
  def index
    weather = Weather.new(index_params)
    weather.set_current_weather
    render json: weather, serializer: Api::V1::Weather::IndexSerializer
  end

  private

  def index_params
    params.permit(:location)
  end
end
