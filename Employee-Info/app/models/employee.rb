class Employee < ActiveRecord::Base
  def create
  end

  def new
  end

  def update
  end

  def edit
  end

  def show
  end

  def index
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
