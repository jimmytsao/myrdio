'use strict';

(function(App, Backbone){
  
  App.routers.Router = Backbone.Router.extend({
    //Setting up routes
    routes: {
      '': 'index'
    },

    //Instantiate the Index View (overall view for the app)
    index: function(){
      new App.views.IndexView({el: '#main'});
    }
  });
})(myRdioApp, Backbone);