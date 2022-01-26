const express = require('express');
const router = express.Router();

// Require controller modules.
const shrub_controller = require('../controllers/shrubController');

// GET catalog home page.
router.get('/', shrub_controller.index);

// GET request for one Shrub.
router.get('/shrub/:queryName', shrub_controller.shrub_detail);

// GET request for list of all Shrubs.
router.get('/shrubs', shrub_controller.shrub_list);

// GET request for search of all Shrubs.
router.get('/search/:leafColors/:barkColors/:stemColors/:fruitColors/:flowerColors/:plantTypes/:plantShapes/:leafDimensions/:flowerDimensions', shrub_controller.shrub_search_get);

// GET catalog about page.
router.get('/about', shrub_controller.about);

module.exports = router;