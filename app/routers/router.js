'use strict';

(function(App, Backbone){
  
  App.routers.Router = Backbone.Router.extend({

    routes: {
      '': 'index',
      'search/:query': 'search'
    },

    index: function(){
      new App.views.IndexView({el: '#main'});
    },

    search: function(query){
      console.log('query: ',query);
    }
  });
})(myRdioApp, Backbone);