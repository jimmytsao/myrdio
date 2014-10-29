'use strict';

(function(App, _){
  
  var template = [
    '<div>',
      '<input type="text" class="searchInput">',
      '<button type="button">Search</button>',
    '</div>'].join('');

  App.templates.indexSearch = _.template(template);

})(myRdioApp, _);