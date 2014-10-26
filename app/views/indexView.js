'use strict';

(function(App, Backbone){

  App.views.IndexView = Backbone.View.extend({

    initialize: function(){
      this.model = new App.models.IndexModel();
      this.render();
    },

    render: function(){
      this.$el.html(new App.views.IndexSearchView().render().el);
    }
  });

})(myRdioApp, Backbone);