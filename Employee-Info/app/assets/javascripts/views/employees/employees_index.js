EmployeeInfo.Views.EmployeeIndex = Backbone.CompositeView.extend({
  template: JST['employees/index'],

  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render)
  },

  addEmployee: function (employee) {
    var view = new EmployeeInfo.Views.EmployeeRow({
      model: employee
    });
    this.addSubview('#employees', view);
  },

  render: function() {
    this.$el.html(this.template());
    if (this.collection.models.length > 0) {
      this.collection.models.forEach(this.addEmployee.bind(this));
    }

    return this;
  }
})
