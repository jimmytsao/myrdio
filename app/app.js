'use strict';

(function(){

  //Creating a publish/subscribe global event object for communication between modules
  var pubsub = {};
  _.extend(pubsub, Backbone.Events);

  //Creating a global object to store Backbone component definitions
  window.myRdioApp = {
    views: {},
    models: {},
    collections: {},
    templates: {},
    routers: {},
    pubsub: pubsub
  };


})();