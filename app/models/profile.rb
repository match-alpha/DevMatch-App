class Profile < ApplicationRecord
  belongs_to :user

  # validates :about_me, :city, :state, presence: true
end
