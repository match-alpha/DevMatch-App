class UsersController < ApplicationController
    def index
        @users = User.includes(:skills)
    end
end
