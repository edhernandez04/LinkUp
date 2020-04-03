class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :fullName
      t.string :userName
      t.string :password_digest
      t.integer :avatar_id

      t.timestamps
    end
  end
end
