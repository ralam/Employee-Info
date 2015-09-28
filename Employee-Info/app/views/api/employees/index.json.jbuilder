json.employees @employees.each do |employee|
  json.partial!('api/employees/employee', employee: employee)
end
