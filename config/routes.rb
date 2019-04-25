Rails.application.routes.draw do
  resources :user_skills
  resources :profiles
  resources :skills
  devise_for :users
  get '*path', to: 'pages#protected', constraints: ->(request){ request.format.html? }
  get "protected", to: 'pages#protected', as: :protected
  get "/users", to: 'users#index'
 root to: 'pages#unprotected'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
