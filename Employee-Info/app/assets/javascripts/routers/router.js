EmployeeInfo.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this.employees = options.employees
  },

  routes: {
    'index': 'index',
    'employees/new': 'newEmployee'
  },

  index: function (){
    this.employees.fetch();

    var indexView = new EmployeeInfo.Views.EmployeeIndex({
      collection: this.employees
    });

    this._swapView(indexView);
  },

  newEmployee: function(){
    var newEmployeeView = new EmployeeInfo.Views.EmployeeForm();

    this._swapView(newEmployeeView);
  },

  //Swaps current view with new view, garbage collects old views
  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
})
