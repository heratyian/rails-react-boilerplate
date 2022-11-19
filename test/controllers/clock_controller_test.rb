require "test_helper"

class ClockControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get ping_index_url
    assert_response :success
  end
end
