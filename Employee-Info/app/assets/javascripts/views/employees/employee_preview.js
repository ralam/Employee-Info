EmployeeInfo.Views.EmployeeIndex = Backbone.View.extend({
  template: JST['employees/preview.js'],
  className: 'employee preview',
  tagName: 'tr'

  render: function () {
    this.$el.html(this.template({employee: this.model}))

    return this
  }
})
