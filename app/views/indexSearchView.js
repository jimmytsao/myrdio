'use strict';

(function(App, Backbone){

  App.views.IndexSearchView = Backbone.View.extend({
    initialize: function(){
      this.model = new App.models.IndexSearchModel();
    },

    render: function(){
      this.$el.html(App.templates.indexSearch());
      return this;
    }
  });

})(myRdioApp, Backbone);