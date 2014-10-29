'use strict';

(function(App, Backbone){

  App.views.IndexView = Backbone.View.extend({

    initialize: function(){
      this.model = new App.models.IndexModel();
      this.render();
    },

    render: function(){
      this.$el.html(App.templates.index());
      this.$el.find('#search').html(new App.views.IndexSearchView().render().el);
      this.$el.find('#results').html(new App.views.SearchResultsView().render().el);
    }
  });

})(myRdioApp, Backbone);