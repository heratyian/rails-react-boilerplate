require 'net/http'

class MovieApi
  include Serializable

  attr_accessor :results

  def search_movies(query)
    query_params = {
      api_key:,
      language: 'en-US',
      page: 1,
      include_adult: false,
      query:
    }

    uri = URI("https://api.themoviedb.org/3/search/movie?#{query_params.to_query}")
    response = Net::HTTP.get(uri)
    @results = JSON.parse(response)['results']

    self
  end

  def api_key
    Rails.application.credentials[Rails.env.to_sym][:movie_db][:api_key]
  end
end
