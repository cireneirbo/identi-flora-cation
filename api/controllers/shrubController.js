// Import libraries
const { body,validationResult } = require('express-validator');
const async = require('async');

// Import project files
const Shrub = require('../models/shrub');

// /catalog/home page
exports.index = function(req, res) {

    res.render('index', { title: 'Home' });
    
};

// Display list of all Shrubs.
exports.shrub_list = function(req, res, next) {
    
    const list_shrubs = Shrub.shrubs;
    
    //res.render('shrub_list', { title: 'Shrub List', shrub_list: list_shrubs} );
    res.send({ title: 'Shrub List', shrub_list: list_shrubs} );
        
  
};

// Display detail page for a specific Shrub.
exports.shrub_detail = function(req, res, next) {

    const shrub = [];
    for( let i = 0; i < Shrub.shrubs.length; i++) {

        if(Shrub.shrubs[i].queryName.includes(req.params.queryName)) {
            shrub.push(Shrub.shrubs[i]);
            console.log("High-five")
        }
        else {
            console.log(Shrub.shrubs[i].common_name.toLowerCase());
            console.log(req.params)
        }
    }
    
    //res.render('shrub_detail', { title: 'Shrub Detail', shrub: shrub } );
    res.send({ title: 'Shrub Detail', shrub: shrub } );
    

};
/*
// Display Shrub delete form on GET.
exports.shrub_delete_get = function(req, res, next) {

    async.parallel({
        shrub: function(callback) {
            Shrub.findById(req.params.id).exec(callback)
        },
    }, function(err, results) {
        if (err) { return next(err); }
        if (results.shrub==null) { // No results.
            res.redirect('/catalog/shrubs');
        }
        // Successful, so render.
        res.render('shrub_delete', { title: 'Delete Shrub', shrub: results.shrub } );
    });

};

// Handle Shrub delete on POST.
exports.shrub_delete_post = function(req, res, next) {

    async.parallel({
        shrub: function(callback) {
          Shrub.findById(req.body.shrubid).exec(callback)
        },
    }, function(err, results) {
        if (err) { return next(err); }
        // Success
        // Delete object and redirect to the list of shrubs.
        Shrub.findByIdAndRemove(req.body.shrubid, function deleteShrub(err) {
            if (err) { return next(err); }
            // Success - go to shrub list
            res.redirect('/catalog/shrubs')
        })
        
    });
    
};
*/

// /catalog/about page
exports.about = function(req, res) {

    res.render('about', { title: 'About' });
    
};

// 
// Display Shrub search form on GET.
exports.shrub_search_get = function(req, res, next) {
    
    //const list_shrubs = Shrub.shrubs;

    // create empty array to add shrubs to
    let searchedShrubs = [];
    let message = "";
    let shrubParamKeys = [];
    let searchParamsValues = [
        req.params.leafColors,
        req.params.barkColors,
        req.params.stemColors,
        req.params.fruitColors,
        req.params.plantTypes,
        req.params.plantShapes,
        req.params.leafDimensions,
        req.params.flowerDimensions
    ];

    // check params for matches and then add to seachedShrubs array if not in it
    for( let i = 0; i < Shrub.shrubs.length; i++) {
        // set values to reduce code repetition
        shrubParamKeys = [
            Shrub.shrubs[i].leaf_color,
            Shrub.shrubs[i].bark_color,
            Shrub.shrubs[i].stem_color,
            Shrub.shrubs[i].fruit_color,
            Shrub.shrubs[i].flower_color,
            Shrub.shrubs[i].plant_type,
            Shrub.shrubs[i].plant_shape,
            Shrub.shrubs[i].leaf_dimensions,
            Shrub.shrubs[i].flower_dimensions,
        ];

        for(let j = 0; j < shrubParamKeys.length; j++) {
            // if the shrub matches the param
            if(shrubParamKeys[i].includes(searchParamsValues[j])) {
                // if not in searchedShrubs, add
                if(!searchedShrubs.includes(Shrub.shrubs[i])) {
                    searchedShrubs.push(Shrub.shrubs[i]);
                    message = "We have found the shrubs you are looking for!";
                    console.log("Added: " + Shrub.shrubs[i].common_name);
                }
            }
        }
/*
        // if the shrub matches the param
        if(Shrub.shrubs[i].leaf_color.includes(req.params.leafColors)) {
            // if not in searchedShrubs, add
            if(!searchedShrubs.includes(Shrub.shrubs[i])) {
                searchedShrubs.push(Shrub.shrubs[i]);
                message = "We have found the shrubs you are looking for!";
                console.log("Added: " + Shrub.shrubs[i].common_name);
            }
        }
        if(Shrub.shrubs[i].bark_color.includes(req.params.barkColors)) {
            // if not in searchedShrubs, add
            if(!searchedShrubs.includes(Shrub.shrubs[i])) {
                searchedShrubs.push(Shrub.shrubs[i]);
                message = "We have found the shrubs you are looking for!";
                console.log("Added: " + Shrub.shrubs[i].common_name);
            }
        }
        else {
            console.log(Shrub.shrubs[i].common_name);
            console.log("No match: " + req.params);
        }*/

    }

    if(searchedShrubs.length == 0) {
        message = "We could not find any matches...";
    }
            
    //res.render('shrub_form', { title: 'Search', shrub_list: list_shrubs} );
    res.send( { message: message, shrub_list: searchedShrubs} );
        

};

// Handle Shrub search on POST.
exports.shrub_search_post = [

    // Validate and sanitise fields.
    body('plant_type').exists(),
    body('plant_shape').exists(),
    body('leaf_color').exists(),
    body('leaf_type').exists(),
    body('leaf_dimensions').exists(),
    body('bark_color').exists(),
    body('stem_color').exists(),
    body('fruit_color').exists(),
    body('flower_color').exists(),
    body('flower_dimensions').exists(),
    
    // Process request after validation and sanitization.
    (req, res, next) => {

        // Extract the validation errors from a request.
        const errors = validationResult(req);

        
        // Create a Shrub object with escaped/trimmed data and old id.
        const shrub_search_list = { 
            plant_type: req.body.plant_type,
            plant_shape: req.body.plant_shape,
            leaf_color: req.body.leaf_color,
            leaf_type: req.body.leaf_type,
            leaf_dimensions: req.body.leaf_dimensions,
            bark_color: req.body.bark_color,
            stem_color: req.body.stem_color,
            fruit_color: req.body.fruit_color,
            flower_color: req.body.flower_color,
            flower_dimensions: req.body.flower_dimensions,
        }
        

        let searchedData = [];

        // Search for each shrub_search_list with an `$or` expression
        Shrub.find({ $or: [
            { leaf_color: shrub_search_list.leaf_color }, 
            { plant_type: shrub_search_list.plant_type },
            { plant_shape: shrub_search_list.plant_shape },
            { leaf_type: shrub_search_list.leaf_type },
            { leaf_dimensions: shrub_search_list.leaf_dimensions },
            { bark_color: shrub_search_list.bark_color },
            { stem_color: shrub_search_list.stem_color },
            { fruit_color: shrub_search_list.fruit_color },
            { flower_color: shrub_search_list.flower_color },
            { flower_dimensions: shrub_search_list.flower_dimensions },
        ]})
        .sort([['common_name', 'ascending']])
        .exec(function (err, list_shrubs) {
            if (err) { return next(err); }
            //Successful, so render
                if (!searchedData.includes(list_shrubs)) {
                    searchedData.push(list_shrubs);
                }
                    
            res.render('search_results', { title: 'Search', /*shrub_search_list: shrub_search_list,*/ searchedData: searchedData } );
            //res.send({ /*shrub_search_list: shrub_search_list, shrub_list: list_shrubs,*/ searchedData: searchedData /*shrub_leaf_color: shrub_search_list.leaf_color*/ } );
        });

    }
];
