class CreateDemographics < ActiveRecord::Migration[7.0]
  def change
    create_table :demographics do |t|
      t.references :member, null: false, foreign_key: true
      t.string :phone_number
      t.string :address
      t.integer :zip_code
      t.string :city
      t.string :state

      t.timestamps
    end
  end
end
