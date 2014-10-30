'use strict';

(function(App, _){
  
  //Template for each result returned by the search query
  var template = [
    '<div class="searchResult">',
      '<img src=<%= icon %>>',
      '<%= name %>',
    '</div>'].join('');

  App.templates.searchResult = _.template(template);

})(myRdioApp, _);