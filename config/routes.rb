Rails.application.routes.draw do
  resources :user_skills
  resources :profiles
  resources :skills
  resources :users
  devise_for :users

  authenticated :user do
    get "protected", to: 'pages#protected', as: :protected
    get '*path', to: 'pages#protected', constraints: ->(request){ request.format.html? }
    root to: 'page#protected'
  end
 root to: 'pages#unprotected'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
