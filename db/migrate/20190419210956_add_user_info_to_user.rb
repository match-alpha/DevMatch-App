class AddUserInfoToUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :education, :string
    add_column :users, :experience, :string
    add_column :users, :about_me, :string
    add_column :users, :location, :string
  end
end
