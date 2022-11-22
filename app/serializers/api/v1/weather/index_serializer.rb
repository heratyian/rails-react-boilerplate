class Api::V1::Weather::IndexSerializer < ActiveModel::Serializer
  attributes :query

  attribute(:current_weather, serializer: Api::V1::Weather::CurrentWeatherSerializer)

  # attribute :geo, serializer: GeoSerializer
end
