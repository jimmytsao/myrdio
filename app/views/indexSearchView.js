'use strict';

(function(App, Backbone){

  App.views.IndexSearchView = Backbone.View.extend({
    initialize: function(){
      this.model = new App.models.IndexSearchModel();
    },

    events: {
      'click button': 'search',
    },

    render: function(){
      this.$el.html(App.templates.indexSearch());
      this.$input = this.$el.find('input');
      return this;
    },

    search: function(){
      var data = {
        q: this.$input.val().trim()
      };

      if (data.q.length){
        App.pubsub.trigger('searchAll', data);
      }
    }
  });

})(myRdioApp, Backbone);