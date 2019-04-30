json.array! @users do |user|

json.profile @user.profile, :education, :experience, :about_me, :city, :state, :github, :linkedin, :twitter, :instagram, :id
end