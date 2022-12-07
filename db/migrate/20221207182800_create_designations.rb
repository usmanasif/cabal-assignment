class CreateDesignations < ActiveRecord::Migration[7.0]
  def change
    create_table :designations do |t|
      t.string :title, null: false
      t.references :company, null: false, foreign_key: true

      t.timestamps
    end
  end
end
