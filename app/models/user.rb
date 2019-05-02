class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

         # has_one :profile
         # has_many :user_skills
         # has_many :skills, through: :user_skills
         #
         # validates :first_name, :last_name, :user_type, :email, :password, presence: true


  has_one_attached :avatar
  has_one :profile
  has_many :user_skills
  has_many :skills, through: :user_skills
  validates :first_name, :last_name, :user_type, presence: true
  after_create do
    self.create_profile
  end

end
