json.extract! profile, :id, :user_id, :user_type, :education, :experience, :about_me, :city, :state, :github, :linkedin, :twitter, :instagram, :created_at, :updated_at
json.url profile_url(profile, format: :json)
