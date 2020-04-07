class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :fullName
      t.string :userName
      t.string :password_digest
      t.string :avatar
      t.float :latitude
      t.float :longitude

      t.timestamps
    end
  end
end
