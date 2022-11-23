class Api::V1::Movie::IndexSerializer < ActiveModel::Serializer
  attribute(:results) { object.results.map { |r| Api::V1::Movie::SearchResultSerializer.new(r).as_json } }
end
