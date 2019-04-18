Rails.application.routes.draw do
  devise_for :users
  get '*path', to: 'pages#protected', constraints: ->(request){ request.format.html? }
 root to: 'pages#unprotected'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
