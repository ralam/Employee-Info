window.EmployeeInfo = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    Backbone.history.start();
    alert('Hello from Backbone!');
  }
};

$(document).ready(function(){
  EmployeeInfo.initialize();
});
