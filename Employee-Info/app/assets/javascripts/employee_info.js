window.EmployeeInfo = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new EmployeeInfo.Routers.Router({
      //Set root element
      $rootEl: $("div.content"),
      //Assign Employees collection
      employees: EmployeeInfo.Collections.employees
    })
    Backbone.history.start();
  }
};
