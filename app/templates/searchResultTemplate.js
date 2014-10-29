'use strict';

(function(App, _){
  
  var template = [
    '<div>',
      '<img src=<%= icon %>>',
      '<%= type %>',
      '<%= id %>',
    '</div>'].join('');

  App.templates.searchResult = _.template(template);

})(myRdioApp, _);