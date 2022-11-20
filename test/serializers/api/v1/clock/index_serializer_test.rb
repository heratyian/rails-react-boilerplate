require 'test_helper'

class Api::V1::Clock::IndexSerializerTest < ActiveSupport::TestCase
  test 'should include a time' do
    clock = Clock.new
    serializer = Api::V1::Clock::IndexSerializer.new(clock)
    assert(serializer.serializable_hash[:time].present?)
  end
end
