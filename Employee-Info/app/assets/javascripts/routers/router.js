EmployeeInfo.Routers.Router = Backbone.Router.extend({
  intitialze: function (options) {
    this.$rootEl = options.$rootEl;
    this.employees = options.employees
  },

  routes: {

  },

  index: function (){
    this.employees.fetch();

    var indexView = new EmployeeInfo.Views.Index({
      collection: this.employees
    });

    this._swapView(indexView);
  },


  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
})
