class UsersController < ApplicationController
    def index
        @users = User.includes(:skills)
    end

    def update
      @user = current_user
      @user.update_attributes(user_params)
      render :show
    end

    def user_params
        params.require(:user).permit(:avatar)
    end
end
