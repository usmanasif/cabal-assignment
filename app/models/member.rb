class Member < ApplicationRecord
  belongs_to :company
  belongs_to :designation
  has_one :demographic

  validates :firstname, presence: true
  validates :lastname, presence: true
  validates :email, presence: true, uniqueness: true

  def self.get_members
    includes(:company, :designation, :demographic).all.map do |member|
      {
        first_name: member.firstname,
        last_name: member.lastname,
        email: member.email,
        avatar_url: member.avatar_url,
        company_name: member.company.name,
        company_title: member.designation.title,
        phone_number: member.demographic.phone_number,
      }
    end
  end
end
