class AddFrameworkToSkill < ActiveRecord::Migration[5.2]
  def change
    add_column :skills, :framework, :string
  end
end
