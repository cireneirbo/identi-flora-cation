const express = require('express');
const router = express.Router();
const shrub_controller = require('../controllers/shrubController');

/* GET home page. */
router.get('/', shrub_controller.shrub_list);

module.exports = router;
