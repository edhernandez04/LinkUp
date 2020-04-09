Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

    resources :channels, only: [:index, :create, :show]
    resources :messages, only: [:create]

    mount ActionCable.server => '/cable'

    get '/users', to: 'users#index'
    post '/users', to: 'users#create'

    get '/messages', to: 'messages#index'
    get '/messages/:id', to: 'messages#show'

    patch '/users/:id', to: 'users#update'
    delete '/users/:id', to: 'users#destroy'

    post '/signup', to: 'users#create'
    post '/login', to: 'auth#login'

    get '/auto_login', to: 'auth#auto_login'

end