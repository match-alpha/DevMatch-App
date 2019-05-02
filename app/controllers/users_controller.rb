class UsersController < ApplicationController
    def index
        @users = User.includes(:skills)
    end

    def update
      @user = current_user
      @user.update_attributes(user_params)
      render :show
    end


    def show
        @user = User.find params[:id]
    end

    def edit
    end


    def destroy
         @user = current_user.find params[:id]

        @user.destroy

        respond_to do |format|
          format.html { redirect_to destroy_user_session_path }
        end
    end

    def user_params
        params.require(:user).permit(:avatar)
    end

end
