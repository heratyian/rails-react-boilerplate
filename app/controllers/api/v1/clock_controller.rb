class Api::V1::ClockController < ApplicationController
  def index
    clock = Clock.new
    render json: clock, serializer: Api::V1::Clock::IndexSerializer
  end
end
