Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :clock, only: [:index]
      resources :weather, only: [:index]
      resources :movie, only: [:index]
    end
  end
end
