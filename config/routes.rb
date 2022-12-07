Rails.application.routes.draw do
  resources :members, only: %i[index]
  resources :imports, only: %i[create]
  root 'home#index'
end
