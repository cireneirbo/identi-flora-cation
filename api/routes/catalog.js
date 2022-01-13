const express = require('express');
const router = express.Router();

// Require controller modules.
const shrub_controller = require('../controllers/shrubController');

// GET catalog home page.
router.get('/', shrub_controller.index);



/*
* SHRUB ROUTES
*/

// GET request for creating Author. NOTE This must come before route for id (i.e. display author).
// router.get('/shrub/create', shrub_controller.shrub_create_get);

// POST request for creating Author.
//router.post('/author/create', author_controller.author_create_post);

// GET request to delete Author.
router.get('/shrub/:id/delete', shrub_controller.shrub_delete_get);

// POST request to delete Author.
router.post('/shrub/:id/delete', shrub_controller.shrub_delete_post);

// GET request to update Author.
//router.get('/author/:id/update', author_controller.author_update_get);

// POST request to update Author.
//router.post('/author/:id/update', author_controller.author_update_post);

// GET request for one Shrub.
router.get('/shrub/:id', shrub_controller.shrub_detail);

// GET request for list of all Shrubs.
router.get('/shrubs', shrub_controller.shrub_list);

// GET request for search of all Shrubs.
router.get('/search', shrub_controller.shrub_search_get);

// POST request for search of all Shrubs,
router.post('/search', shrub_controller.shrub_search_post);

// GET catalog about page.
router.get('/about', shrub_controller.about);

// GET search results
// router.get('/search/results', shrub_controller.results);



module.exports = router;