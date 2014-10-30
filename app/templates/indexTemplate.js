'use strict';

(function(App, _){
  
  //Template for the index view (overall view of the app)
  var template = [
    '<section id="search"></section>',
    '<section id="results"></section>'].join('');

  App.templates.index = _.template(template);

})(myRdioApp, _);