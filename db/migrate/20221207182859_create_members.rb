class CreateMembers < ActiveRecord::Migration[7.0]
  def change
    create_table :members do |t|
      t.string :firstname, null: false
      t.string :lastname, null: false
      t.string :email, null: false, unique: true
      t.string :avatar_url
      t.references :company, null: false, foreign_key: true
      t.references :designation, null: false, foreign_key: true

      t.timestamps
    end
  end
end
