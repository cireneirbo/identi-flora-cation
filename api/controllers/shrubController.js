// Import libraries
const { body,validationResult } = require('express-validator');
const async = require('async');
//const img = require('../public/images/arboricola');
// Import project files
const Shrub = require('../models/shrub');

// Display list of all Authors.
exports.shrub_list = function(req, res, next) {
    const list_temp = ["Several", "index", "array", "img"];
    const list_image = ["../public/images/arboricola.png"];
    Shrub.find()
        .sort([['common_name', 'ascending']])
        .exec(function (err, list_shrubs) {
            if (err) { return next(err); }
            //Successful, so return json of data
            res.json( { title: 'Shrub List', shrub_list: list_shrubs, temp_list: list_temp, image_list: list_image } );
        });
  
};