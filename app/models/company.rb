class Company < ApplicationRecord
  has_many :designations
  has_many :members

  validates :name, presence: true, uniqueness: true
end
