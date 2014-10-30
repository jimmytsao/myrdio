'use strict';

(function(App, _){
  
  //Template for the index search view which is the view containing the search input
  var template = [
    '<div>',
      '<div>Enter a Song, Artist, Album name below and click search to query the rdio service:</div>',
      '<input type="text" class="searchInput">',
      '<button type="button">Search</button>',
    '</div>'].join('');

  App.templates.indexSearch = _.template(template);

})(myRdioApp, _);