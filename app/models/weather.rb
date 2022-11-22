require 'net/http'

class Weather
  include Serializable

  attr_accessor :query, :current_weather, :geo

  # query = { location: string }
  def initialize(query)
    @query = query
  end

  def set_current_weather
    geocode if @geo.nil?

    uri = URI(current_weather_url)
    response = Net::HTTP.get(uri)
    @current_weather = JSON.parse(response)

    self
  end

  def geocode
    uri = URI(geocode_url)
    response = Net::HTTP.get(uri)
    @geo = JSON.parse(response)[0]

    self
  end

  private           

  def current_weather_url
    p = {
      lat: @geo['lat'],
      lon: @geo['lon'],
      units: :metric,
      appid: api_key
    }
    base_url + '/data/2.5/weather' + '?' + p.to_query
  end

  def geocode_url
    p = {
      q: @query[:location],
      limit: 1,
      appid: api_key
    }
    base_url + '/geo/1.0/direct' + '?' + p.to_query
  end

  def base_url
    'https://api.openweathermap.org'
  end

  def api_key
    Rails.application.credentials[Rails.env.to_sym][:open_weather_map][:api_key]
  end
end
