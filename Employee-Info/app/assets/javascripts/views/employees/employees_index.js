EmployeeInfo.Views.EmployeeIndex = Backbone.CompositeView.extend({
  template: JST['employees/index'],

  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render)
    this.employeeWidth = $("td.employee_id").width();
    this.birthDate = $("td.birth_date").width();
    this.firstName = $("td.first_name").width();
    this.lastName = $("td.last_name").width();
    this.gender = $("td.gender").width();
    this.hireDate = $("td.hire_date").width();
    this.tableWidth = $("table.data").width();
    this.windowWidth = $(window).width();
    $(window).on("resize", this.resizeHeaders);
  },

  //Creates an EmployeeRow subview
  addEmployee: function (employee) {
    var view = new EmployeeInfo.Views.EmployeeRow({
      model: employee
    });
    this.addSubview('#employees', view);
  },

  //Resize header table cells to match data table
  resizeHeaders: function () {
    this.employeeWidth = $("td.employee_id").width();
    this.birthDate = $("td.birth_date").width();
    this.firstName = $("td.first_name").width();
    this.lastName = $("td.last_name").width();
    this.gender = $("td.gender").width();
    this.hireDate = $("td.hire_date").width();
    this.tableWidth = $("table.data").width();

    //If window size is over 1300px, resize the header table as well for better experience
    if (this.windowWidth > 1300) {
      $("table.headers").css({
        width: this.tableWidth
      });
    } else {
      // If smaller than 1300px, let Bootstrap handle header table sizing
      $("table.headers").removeAttr( 'style' );
    }
    $("th.employee_id").css({
      width: this.employeeWidth
    });
    $("th.birth_date").css({
      width: this.birthDate
    });
    $("th.first_name").css({
      width: this.firstName
    });
    $("th.last_name").css({
      width: this.lastName
    });
    $("th.gender").css({
      width: this.gender
    });
    $("th.hire_date").css({
      width: this.hireDate
    });
  },

  //Creates an EmployeeRow subview for each employee
  render: function() {
    this.$el.html(this.template());
    if (this.collection.models.length > 0) {
      this.collection.forEach(this.addEmployee.bind(this));
    }

    this.resizeHeaders();

    return this;
  }
})
