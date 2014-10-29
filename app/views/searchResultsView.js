'use strict';

(function(App, Backbone){

  App.views.SearchResultsView = Backbone.View.extend({
    initialize: function(){
      this.collection = new App.collections.searchResultsCollection();

      this.listenTo(this.collection, 'add', this.renderOne);
      
      this.listenTo(App.pubsub, 'searchAll', function(data){
        this.collection.fetch({data: $.param(data)});
      });
    },

    render: function(){
      return this;
    },

    renderOne: function(data){
      this.$el.append(new App.views.SearchResultView(data).render().el);
    }
  });

})(myRdioApp, Backbone);