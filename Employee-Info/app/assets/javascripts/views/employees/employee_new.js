EmployeeInfo.Views.EmployeeForm = Backbone.View.extend({
  template: JST['employees/new'],

  initialize: function () {
    this.errors = [];
  },

  events: {
    'submit' : 'submit',
    'click .m-background': 'remove',
    'click .close': 'remove'
  },

  render: function () {

    this.$el.html(this.template({
      employee: this.model,
      errors: this.errors
    }))

    return this
  },

  submit: function(event) {
    event.preventDefault();
    //Get form data
    var formData = $(event.currentTarget).find("form").serializeJSON();
    console.log(formData)
    this.model.set(formData);
    this.model.save(formData, {
      success: function(employee, response, options) {
        //On success, add employee to collection and navigate to idex
        this.collection.add(employee);
        Backbone.history.navigate('/index', { trigger: true })
      }.bind(this),
      error: function (employee, response, options) {
        //On error, parse JSON errors response and rerender page with errors
        var errors = response.responseText.split("\"");
        this.errors = []
        errors.forEach(function (el, idx) {
          if (idx % 2 == 1) {this.errors.push(el)}
        }.bind(this));
        console.log(this.errors);
        this.render();
      }.bind(this)
    });
  }
})
