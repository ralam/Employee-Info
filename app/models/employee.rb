class Employee < ActiveRecord::Base
  validates :birth_date, :first_name, :last_name, :gender, :hire_date, presence: true
end
