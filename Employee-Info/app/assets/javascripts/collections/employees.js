EmployeeInfo.Collections.Employees = Backbone.Collection.extend({
  url: 'api/employees',
  model: EmployeeInfo.Models.Employee,

  parse: function(data) {
    return data.employees
  },

  getOrFetch: function (id) {
    var collection = this;
    var employee = this.get(id);

    if (employee) {
      employee.fetch();
    } else {
      employee = new EmployeeInfo.Models.Employee ({ id: id })
      collection.add(employee)
      employee.fetch({
        error: function (XHR, response, status) {
          employee.set("errors", response.responseJSON);
          collection.remove(employee);
        }
      })
    }
  }
})

EmployeeInfo.Collections.employees = new EmployeeInfo.Collections.Employees();
