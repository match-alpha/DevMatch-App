require 'rails_helper'

RSpec.describe Skill, type: :model do
  it "should validate language" do
    skill = Skill.create
    expect(skill.errors[:language]).to_not be_empty
  end

  it "should validate framework" do
    skill = Skill.create
    expect(skill.errors[:framework]).to_not be_empty
  end
end
