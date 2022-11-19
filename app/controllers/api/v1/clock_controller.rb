class Api::V1::ClockController < ApplicationController
  def index
    render json: { response: Time.now.to_s }
  end
end
