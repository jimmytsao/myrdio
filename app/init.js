'use strict';

(function(App, $, Backbone){
  
  //Start the application once the DOM has been constructed
  $(document).ready(initialize);

  function initialize(){
    var appRouter = new App.routers.Router();
    Backbone.history.start();
  }

})(myRdioApp, $, Backbone);

