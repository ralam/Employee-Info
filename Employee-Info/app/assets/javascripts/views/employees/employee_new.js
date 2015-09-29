EmployeeInfo.Views.EmployeeNew = Backbone.View.extend({
  template: JST['employees/new'],
  tagName: 'form',

  render: function () {
    this.$el.html(this.template({employee: this.model}))
    console.log(this.model);
    return this
  }
})
