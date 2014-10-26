'use strict';

(function(App, $, Backbone){
  
  $(document).ready(initialize);

  function initialize(){
    var appRouter = new App.routers.Router();
    Backbone.history.start();
  }

})(myRdioApp, $, Backbone);

