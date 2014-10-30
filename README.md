myrdio
======

Application that queries an rdio api service

File Structure:

app.js    - configuration of global app object
init.js   - starts the application
router.js - router setup for app

'''
indexView.js  - overall view of the app
|    model: indexModel.js
|    template: indexTemplate.js
|
|----indexSearchView.js
|        model: indexSearchModel.js
|        template: indexSearchTemplate.js
|
|----searchResultsView.js
         |    collection: searchResultsCollection.js
         |
         |----searchResultView.js
                  model: searchResultModel.js
                  template: searchResultTemplate.js
'''
                  