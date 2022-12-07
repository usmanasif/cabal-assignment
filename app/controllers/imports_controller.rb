class ImportsController < ApplicationController
  def create
    if UploadService.new(params[:file].tempfile).create_members
      render json: Member.all, status: :ok
    else
      render json: { message: "Invalid CSV" }, status: :unprocessable_entity
    end
  end
end
