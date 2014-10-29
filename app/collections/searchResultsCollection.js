'use strict';

(function(App, Backbone){

  App.collections.searchResultsCollection = Backbone.Collection.extend({
    
    url: 'http://rdio-service.herokuapp.com/search',

    model: App.models.searchResult,
    
    parse: function (response){
      return response.data;
    }
  });

})(myRdioApp, Backbone);