require "csv"

class UploadService
  def initialize(file)
    @file = file
  end

  def create_members
    ActiveRecord::Base.transaction do
      CSV.read(file, headers: true).each do |record|
        company = Company.find_or_create_by!(name: record['company_name'])
        designation = Designation.find_or_create_by!(title: record['company_title'], company_id: company.id)
        member = Member.create!(
          firstname: record['first_name'],
          lastname: record['last_name'],
          email: record['email'],
          avatar_url: record['avatar_url'],
          designation_id: designation.id,
          company_id: company.id)
        Demographic.create!(phone_number: record['phone_number'], member_id: member.id)
      end
      true
    end
  rescue StandardError => e
    false
  end

  private

  attr_accessor :file
end
