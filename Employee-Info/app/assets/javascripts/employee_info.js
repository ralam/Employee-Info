window.EmployeeInfo = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new EmployeeInfo.Routers.Router({
      $rootEl: $("div.content"),
      employees: EmployeeInfo.Collections.employees
    })
    Backbone.history.start();
  }
};

$(document).ready(function(){
  EmployeeInfo.initialize();
});
