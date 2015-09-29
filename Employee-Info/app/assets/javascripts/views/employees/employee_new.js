EmployeeInfo.Views.EmployeeForm = Backbone.View.extend({
  template: JST['employees/new'],
  tagName: 'form',

  events: {
    'submit' : 'submit'
  },

  render: function () {
    this.$el.html(this.template({employee: this.model}))
    console.log(this.model);
    return this
  },

  submit: function(event) {
    event.preventDefault();

    var formData = $(event.currentTarget).serializeJSON();

    this.model.set(formData);
    this.model.save(formData, {
      success: function(employee) {
        this.collection.add(employee);
        Backbone.history.navigate('/index', { trigger: true })
      }.bind(this),
      error: function (errors, errorText) {
        this.errors = errorText.responseJSON;
        this.render();
      }.bind(this)
    });
  }
})
