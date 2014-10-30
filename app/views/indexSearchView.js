'use strict';

(function(App, Backbone){

  //Subview of indexView that controls the query input section
  App.views.IndexSearchView = Backbone.View.extend({
    initialize: function(){
      this.model = new App.models.IndexSearchModel();
    },

    //Configure handlers for DOM events
    events: {
      'click button': 'search',
      'keypress': 'checkKeypress'
    },

    //Render the template and create a jquery cache reference for the input field
    render: function(){
      this.$el.html(App.templates.indexSearch());
      this.$input = this.$el.find('input');
      return this;
    },

    //Check if the key pressed was the enter key
    checkKeypress: function(event){
      var enterButtonKeyCode = 13;
      if (event.keyCode === enterButtonKeyCode){
        this.search();
      }
    },

    //Trigger a searchAll event which will be heard by search results view to query the backend service
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