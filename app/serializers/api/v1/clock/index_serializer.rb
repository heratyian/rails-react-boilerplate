class Api::V1::Clock::IndexSerializer < ActiveModel::Serializer
  attributes :time

  attribute(:testy_test_attr) { 'test' }
end
