class Api::EmployeesController < ApplicationController
  before_action :require_signed_in!

  def create
    @employee = Employee.new(employee_params)
    if @employee.save
      render json: @employee
    else
      render json: @employee.errors.full_messages, status: 422
    end
  end

  def new
  end

  def update
  end

  def edit
  end

  def show
    begin
      @employee = Employee.find(params[:id])
      if @employee
        render :show
      end
    rescue
      render json: ["That employee doesn't exist."], status: 404
    end
  end

  def index
    @employees = Employee.all
  end

  def destroy
  end

  private

  def employee_params
    params
      .require(:employee)
      .permit(:birth_date, :first_name, :last_name, :gender, :hire_date)
  end
end
