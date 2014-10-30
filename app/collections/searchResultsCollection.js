'use strict';

(function(App, Backbone){

  //Collection that contains the results after querying the backend service
  App.collections.searchResultsCollection = Backbone.Collection.extend({
    
    url: 'http://rdio-service.herokuapp.com/search',

    model: App.models.searchResult,
    
    //Parse the response since all of the results are stored in an array under the data property of the response object
    parse: function (response){
      return response.data;
    }
  });

})(myRdioApp, Backbone);