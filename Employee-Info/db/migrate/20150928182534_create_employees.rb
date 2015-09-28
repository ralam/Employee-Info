class CreateEmployees < ActiveRecord::Migration
  def change
    create_table :employees do |t|
      t.date :birth_date, null: false
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :gender, null: false
      t.date :hire_date, null: false
      t.timestamps null: false
    end
  end
end
