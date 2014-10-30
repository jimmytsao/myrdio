'use strict';

(function(App, Backbone){

  //Overall view for the app
  App.views.IndexView = Backbone.View.extend({

    initialize: function(){
      this.model = new App.models.IndexModel();
      this.render();
    },

    //Render template and subviews
    render: function(){
      this.$el.html(App.templates.index());
      new App.views.IndexSearchView({el: '#search'}).render();
      new App.views.SearchResultsView({el: '#results'}).render();
    }
  });

})(myRdioApp, Backbone);