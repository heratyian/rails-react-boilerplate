class Api::V1::Weather::CurrentWeatherSerializer < ActiveModel::Serializer
  attributes  :coord,
              :weather,
              :base,
              :main,
              :visibility,
              :wind,
              :clouds,
              :dt,
              :sys,
              :timezone,
              :id,
              :name
end
