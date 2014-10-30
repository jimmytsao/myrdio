'use strict';

(function(App, Backbone){

  //Subview of index view for search results
  App.views.SearchResultsView = Backbone.View.extend({
    initialize: function(){
      this.collection = new App.collections.searchResultsCollection();

      //setup listener to render a view for each model added to the results collection
      this.listenTo(this.collection, 'add', this.renderOne);
      
      //listen to the 'searchAll' event and fetch data from the backend service once heard
      this.listenTo(App.pubsub, 'searchAll', function(data){
        this.collection.fetch({data: $.param(data)});
      });
    },

    render: function(){
      return this;
    },

    //render and individual result
    renderOne: function(data){
      this.$el.append(new App.views.SearchResultView(data).render().el);
    }
  });

})(myRdioApp, Backbone);