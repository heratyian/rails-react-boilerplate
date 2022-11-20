module Serializable
  extend ActiveSupport::Concern
  include ActiveModel::Serialization

  module ClassMethods
    def model_name = name
  end
end
