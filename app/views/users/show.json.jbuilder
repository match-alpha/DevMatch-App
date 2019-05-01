json.id @user.id
json.first_name @user.first_name
json.last_name @user.last_name
json.user_type @user.user_type
json.first_name @user.first_name
json.email @user.email
json.skills @user.skills, :language, :framework, :id
json.profile @user.profile, :education, :experience, :about_me, :city, :state, :github, :linkedin, :twitter, :instagram, :id
<<<<<<< HEAD
json.avatar_url(url_for(@user.avatar)) if @user.avatar.attached?
=======
json.avatar_url(url_for(@user.avatar)) if @user.avatar.attached?
>>>>>>> master
