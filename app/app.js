'use strict';

(function(){

  var pubsub = {};
  _.extend(pubsub, Backbone.Events);

  window.myRdioApp = {
    views: {},
    models: {},
    collections: {},
    templates: {},
    routers: {},
    pubsub: pubsub
  };


})();