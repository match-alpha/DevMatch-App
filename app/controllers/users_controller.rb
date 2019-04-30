class UsersController < ApplicationController
    def index
        @users = User.includes(:skills)
    end
    def show
        @user = User.find params[:id]
     
    end

    def edit
        
    end

    def update
        @user = current_user.find params[:id]
        if @user.update_attributes(experience_params)
            render json: @user
    else
        render json: @user.errors, status: :unprocessable_entity
    end   
    end

   def destroy
        @user = current_user.find params[:id]

       @user.destroy
   
       respond_to do |format|
         format.html { redirect_to destroy_user_session_path }
       end
   end

end
