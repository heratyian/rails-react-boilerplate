require 'net/http'

class MovieApi
  attr_accessor :movie_search_results
  def initialize
  end


  # https://api.themoviedb.org/3/search/movie
  # ?api_key=a99cc60fc2b34dbb18cb806b8a88ed14&language=en-US&page=1&include_adult=false&query=top gun
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
    @movie_search_results = JSON.parse(response)['results']

    self
  end


  # https://image.tmdb.org/t/p/w200/62HCnUTziyWcpDaBO2i1DX17ljH.jpg
  def fetch_poster

  end


  def api_key
    Rails.application.credentials[Rails.env.to_sym][:movie_db][:api_key]
  end
end
