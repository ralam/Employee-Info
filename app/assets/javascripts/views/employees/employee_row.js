EmployeeInfo.Views.EmployeeRow = Backbone.View.extend({
  template: JST['employees/row'],
  className: 'employee',
  tagName: 'tr',

  render: function () {
    this.$el.html(this.template({employee: this.model}))
    return this
  }
})
