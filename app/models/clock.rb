class Clock
  include Serializable

  attr_accessor :time

  def initialize
    @time = Time.now.utc
  end
end
