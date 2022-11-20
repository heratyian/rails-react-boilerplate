require 'test_helper'

class ClockTest < ActiveSupport::TestCase
  test "should have time" do
    clock = Clock.new
    assert clock.time.present?
  end
end
