Rails.application.routes.draw do
  devise_for :users
  resources :user_skills
  resources :profiles
  resources :skills
<<<<<<< HEAD
  resources :users

=======
  devise_for :users
  resources :users
>>>>>>> master
  get '*path', to: 'pages#protected', constraints: ->(request){ request.format.html? }
  get "protected", to: 'pages#protected', as: :protected
  get "/users", to: 'users#index'
  get "/users", to: 'users#show'
 root to: 'pages#unprotected'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
