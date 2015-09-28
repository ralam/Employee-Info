EmployeeInfo.Views.EmployeeRow = Backbone.View.extend({
  template: JST['employees/row'],
  className: 'employee row',
  tagName: 'tr',

  render: function () {
    this.$el.html(this.template({employee: this.model}))
    console.log(this.model);
    return this
  }
})
