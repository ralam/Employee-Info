class Api::EmployeesController < ApplicationController


  def create
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
