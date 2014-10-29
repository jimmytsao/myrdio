'use strict';

(function(App, Backbone){

  App.views.SearchResultView = Backbone.View.extend({
    initialize: function(model){
      this.model = model;

      this.listenTo(this.model, 'remove', function(d){
        this.remove();
      });
    },

    render: function(){
      this.$el.html(App.templates.searchResult(this.model.attributes));
      return this;
    }
  });

})(myRdioApp, Backbone);