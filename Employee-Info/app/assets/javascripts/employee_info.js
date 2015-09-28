window.EmployeeInfo = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    Backbone.history.start();
  }
};

$(document).ready(function(){
  EmployeeInfo.initialize();
});
