'use strict';

(function(App, Backbone){

  //View for each individual search result
  App.views.SearchResultView = Backbone.View.extend({
    initialize: function(model){
      this.model = model;

      //Remove the view if it's model has been removed from the collection to avoid memory leaks
      this.listenTo(this.model, 'remove', function(){
        this.remove();
      }); 
    },

    render: function(){
      this.$el.html(App.templates.searchResult(this.model.attributes));
      return this;
    }
  });

})(myRdioApp, Backbone);