EmployeeInfo.Views.EmployeeRow = Backbone.View.extend({
  template: JST['employees/row.js'],
  className: 'employee row',
  tagName: 'tr'

  render: function () {
    this.$el.html(this.template({employee: this.model}))

    return this
  }
})
