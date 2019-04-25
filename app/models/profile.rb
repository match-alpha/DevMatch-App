class Profile < ApplicationRecord
  belongs_to :user

  validates :user_type, :about_me, :city, :state, presence: true
end
