json.array! @users do |user|
  json.first_name user.first_name
  json.last_name user.last_name
  json.user_type user.user_type
  json.first_name user.first_name
  json.email user.email
  json.skills user.skills, :language, :framework
  if user.profile
    json.profile user.profile, :education, :experience, :about_me, :city, :state, :github, :linkedin, :twitter, :instagram, :id
  end
end
