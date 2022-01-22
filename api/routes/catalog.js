const express = require('express');
const router = express.Router();

// Require controller modules.
const shrub_controller = require('../controllers/shrubController');

// GET catalog home page.
router.get('/', shrub_controller.index);



/*
* SHRUB ROUTES
*/

// GET request for creating Shrub. NOTE This must come before route for id (i.e. display shrub).
// router.get('/shrub/create', shrub_controller.shrub_create_get);

// POST request for creating Shrub.
//router.post('/shrub/create', shrub_controller.shrub_create_post);

// GET request to delete shrub.
//router.get('/shrub/:id/delete', shrub_controller.shrub_delete_get);

// POST request to delete shrub.
//router.post('/shrub/:id/delete', shrub_controller.shrub_delete_post);

// GET request to update shrub.
//router.get('/shrub/:id/update', shrub_controller.shrub_update_get);

// POST request to update shrub.
//router.post('/shrub/:id/update', shrub_controller.shrub_update_post);

// GET request for one Shrub.
router.get('/shrub/:queryName', shrub_controller.shrub_detail);

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