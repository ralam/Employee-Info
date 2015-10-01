class SetPrimaryKeyValue < ActiveRecord::Migration
  def change
    execute "SELECT setval('employees_id_seq', 10000);"
  end
end
