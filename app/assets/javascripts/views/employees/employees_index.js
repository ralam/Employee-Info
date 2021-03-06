EmployeeInfo.Views.EmployeeIndex = Backbone.CompositeView.extend({
  template: JST['employees/index'],

  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render)
    this.employeeWidth = $("td.employee_id").width();
    this.birthDateWidh = $("td.birth_date").width();
    this.firstNameWidth = $("td.first_name").width();
    this.lastNameWidth = $("td.last_name").width();
    this.genderWidth = $("td.gender").width();
    this.hireDateWidth = $("td.hire_date").width();
    this.tableWidth = $("table.data").width();
    this.windowWidth = $(window).width();
    $(window).on("resize", this.resizeWidths);
    $(window).on("resize", this.resizeHeaders);
  },

  events: {
    "click .add-employee": "renderNewEmployeeForm"
  },

  //Creates an EmployeeRow subview for each employee
  render: function() {
    this.$el.html(this.template());
    if (this.collection.models.length > 0) {
      this.collection.forEach(this.addEmployee.bind(this));
    }
    this.resizeWidths();
    this.resizeHeaders();

    return this;
  },

  //Creates an EmployeeRow subview
  addEmployee: function (employee) {
    var view = new EmployeeInfo.Views.EmployeeRow({
      model: employee
    });
    this.addSubview('#employees', view);
  },

  //Reassign stored window, cell, and table widths
  resizeWidths: function () {
    this.employeeWidth = $("td.employee_id").width();
    this.birthDateWidth = $("td.birth_date").width();
    this.firstNameWidth = $("td.first_name").width();
    this.lastNameWidth = $("td.last_name").width();
    this.genderWidth = $("td.gender").width();
    this.hireDateWidth = $("td.hire_date").width();
    this.tableWidth = $("table.data").width();
    this.windowWidth = $(window).width();
  },

  //Resize header table cells to match data table
  resizeHeaders: function () {

    //If window size is over 1300px, resize the header table as well for better experience
    if (this.windowWidth > 1300) {
      $("table.headers").css({
        width: this.tableWidth
      });
    } else {
      // If smaller than 1300px, let Bootstrap handle header table sizing
      $("table.headers").removeAttr('style');
    }
    $("th.employee_id").css({
      width: this.employeeWidth
    });
    $("th.birth_date").css({
      width: this.birthDateWidth
    });
    $("th.first_name").css({
      width: this.firstNameWidth
    });
    $("th.last_name").css({
      width: this.lastNameWidth
    });
    $("th.gender").css({
      width: this.genderWidth
    });
    $("th.hire_date").css({
      width: this.hireDateWidth
    });
  },

  renderNewEmployeeForm: function(event) {
    var employee = new EmployeeInfo.Models.Employee();

    var newEmployeeView = new EmployeeInfo.Views.EmployeeForm({
      model: employee,
      collection: this.collection
    });

    this.addSubview('.container-fluid', newEmployeeView);
  }

})
