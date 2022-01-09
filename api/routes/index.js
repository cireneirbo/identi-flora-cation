const express = require('express');
const router = express.Router();
const shrub_controller = require('../controllers/shrubController');

/* GET home page. */
router.get('/', shrub_controller.shrub_list);

router.get('/images/arboricola/arboricola-0.png', function(req, res, next) {
  res.sendFile('arboricola-0.png');
})

module.exports = router;
