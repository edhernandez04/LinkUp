class CreateAvatars < ActiveRecord::Migration[6.0]
  def change
    create_table :avatars do |t|
      t.string :name
      t.string :image

      t.timestamps
    end
  end
end
