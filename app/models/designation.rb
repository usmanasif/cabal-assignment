class Designation < ApplicationRecord
  belongs_to :company

  validates :title, presence: true
  validates :title, uniqueness: { scope: :company_id }
end
