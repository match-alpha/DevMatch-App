class CreateProfiles < ActiveRecord::Migration[5.2]
  def change
    create_table :profiles do |t|
      t.integer :user_id
      t.string :user_type
      t.string :education
      t.string :experience
      t.string :about_me
      t.string :city
      t.string :state
      t.string :github
      t.string :linkedin
      t.string :twitter
      t.string :instagram

      t.timestamps
    end
  end
end
