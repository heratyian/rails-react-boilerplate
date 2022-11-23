class Api::V1::Movie::SearchResultSerializer < ActiveModel::Serializer
  attribute(:id) { object['id'] }
  attribute(:title) { object['title'] }
  attribute(:poster_url) { object['poster_path'].present? && "https://image.tmdb.org/t/p/w200#{object['poster_path']}" }
end
