json.array! @users do |user|
  json.first_name user.first_name
  json.last_name user.last_name
  json.user_type user.user_type
  json.first_name user.first_name
  json.skills user.skills, :language, :framework
  json.avatar_url(url_for(@user.avatar)) if @user.avatar.attached?
end
