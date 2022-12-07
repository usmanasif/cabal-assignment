class Member < ApplicationRecord
  belongs_to :company
  belongs_to :designation
  has_one :demographic

  validates :firstname, presence: true
  validates :lastname, presence: true
  validates :email, presence: true, uniqueness: true
end
