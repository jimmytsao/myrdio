'use strict';

(function(App, _){
  
  var template = [
    '<section id="search"></section>',
    '<section id="results"></section>'].join('');

  App.templates.index = _.template(template);

})(myRdioApp, _);