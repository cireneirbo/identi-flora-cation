const express = require('express');
const router = express.Router();
//const shrub_controller = require('../controllers/shrubController');

/* GET home page. */
//router.get('/', shrub_controller.shrub_list);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/catalog/'); // redirects the home page to catalog index
});

module.exports = router;





