class UsersController < ApplicationController
    def index
        @users = User.includes(:skills)
    end

<<<<<<< HEAD
=======
    def update
      @user = current_user
      @user.update_attributes(user_params)
      render :show
    end

    
>>>>>>> master
    def show
        @user = User.find params[:id]
    end

    def edit
    end

<<<<<<< HEAD
    def update
      @user = current_user 
      @user.update_attributes(user_params)
      render :show
    end
=======
    # def update
    #     @user = current_user.find params[:id]
    #     if @user.update_attributes(experience_params)
    #         render json: @user
    # else
    #     render json: @user.errors, status: :unprocessable_entity
    # end   
    # end
>>>>>>> master

    def destroy
         @user = current_user.find params[:id]

        @user.destroy

        respond_to do |format|
          format.html { redirect_to destroy_user_session_path }
        end
    end

<<<<<<< HEAD
    def user_params
        params.require(:user).permit(:avatar)
    end
=======
   def user_params
    params.require(:user).permit(:avatar)
end

>>>>>>> master
end
