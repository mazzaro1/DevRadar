const {Router} = require('express');
const DevController = require ('./controllers/DevController.js');
const SearchController = require ('./controllers/SearchController.js');

//index, show , store, update, destroy
const routes = Router ();
routes.get('/devs',DevController.index);

routes.post('/devs',DevController.store);
routes.get('/search',SearchController.index);

    module.exports=routes;
    